import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';

import { AppRouter } from '../../AppRouter.js';
import { MetadataKeys } from './MetadataKeys.js';
import { Methods } from './Methods.js';

export function bodyValidators(keys: string[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      return res.status(422).send('Invalid request!');
    }

    for (let key of keys) {
      if (!req.body[key]) {
        return res.status(422).send('Invalid request!');
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          routePrefix + path,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
