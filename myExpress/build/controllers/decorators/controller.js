var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter.js';
import { MetadataKeys } from './MetadataKeys.js';
export function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            return res.status(422).send('Invalid request!');
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                return res.status(422).send('Invalid request!');
            }
        }
        next();
    };
}
export function controller(routePrefix) {
    return function (target) {
        var router = AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
                [];
            var requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
                [];
            var validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray([routePrefix + path], middlewares), [validator,
                    routeHandler]));
            }
        }
    };
}
