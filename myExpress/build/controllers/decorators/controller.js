import express from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter.js';
import { MetadataKeys } from './MetadataKeys.js';
export var router = express.Router();
export function controller(routePrefix) {
    return function (target) {
        var router = AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            if (path) {
                router[method](routePrefix + path, routeHandler);
            }
        }
    };
}
