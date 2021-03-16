import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys.js';
import { Methods } from './Methods.js';

interface RouteHandlerDesc extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDesc) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const patch = routeBinder(Methods.patch);
export const del = routeBinder(Methods.del);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
