import 'reflect-metadata';

import { RequestMappingMetadata } from '../interfaces/request-mapping-metadata';
import { RequestMethod } from '../enums/request-method';
import { PATH_METADATA, METHOD_METADATA } from '../constants';
import { Utils } from '../utils';

const defaultMetadata = {
    [PATH_METADATA]: '/',
    [METHOD_METADATA]: RequestMethod.GET,
};

export const RequestMapping = (metadata: RequestMappingMetadata = defaultMetadata): MethodDecorator => {
    const path = metadata[PATH_METADATA];
    const requestMethod = metadata[METHOD_METADATA] || RequestMethod.GET;

    return (target, key, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(METHOD_METADATA, requestMethod, descriptor.value);
        return descriptor;
    };
};

const createMappingDecorator = (method: RequestMethod) => (path?: string): MethodDecorator => {
    if (!path) path = '';

    return RequestMapping({
        [PATH_METADATA]: path,
        [METHOD_METADATA]: method,
    });
};

export const Post = createMappingDecorator(RequestMethod.POST);
export const Get = createMappingDecorator(RequestMethod.GET);
export const Delete = createMappingDecorator(RequestMethod.DELETE);
export const Put = createMappingDecorator(RequestMethod.PUT);
export const Patch = createMappingDecorator(RequestMethod.PATCH);
