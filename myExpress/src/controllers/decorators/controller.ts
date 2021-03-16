import express from 'express';
import 'reflect-metadata';

import { AppRouter } from '../../AppRouter.js';
import { MetadataKeys } from './MetadataKeys.js';

import { Methods } from './Methods.js';

export const router = express.Router();

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

      if (path) {
        router[method](routePrefix + path, routeHandler);
      }
    }
  };
}
