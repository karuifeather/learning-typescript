var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys.js';
export function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(MetadataKeys.middleware, __spreadArray(__spreadArray([], middlewares), [middleware]), target, key);
    };
}
