import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys.js';
import { Methods } from './Methods.js';
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        };
    };
}
export var get = routeBinder(Methods.get);
export var patch = routeBinder(Methods.patch);
export var del = routeBinder(Methods.del);
export var post = routeBinder(Methods.post);
export var put = routeBinder(Methods.put);
