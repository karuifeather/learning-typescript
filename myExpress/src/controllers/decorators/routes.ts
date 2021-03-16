import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys.js';
import { Methods } from './Methods.js';

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
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