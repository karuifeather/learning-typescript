import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys.js';
export function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
    };
}
