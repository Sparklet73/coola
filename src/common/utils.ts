import { RequestMethod } from '../common/enums/request-method';

import * as Hapi from 'hapi';

export class Utils {
    static getRequestMethodString(method: RequestMethod): Hapi.HTTP_METHODS_PARTIAL {
        switch (method) {
            case RequestMethod.GET:
                return 'GET';
            case RequestMethod.POST:
                return 'POST';
            case RequestMethod.PUT:
                return 'PUT';
            case RequestMethod.DELETE:
                return 'DELETE';
            case RequestMethod.PATCH:
                return 'PATCH';
            case RequestMethod.OPTIONS:
                return 'OPTIONS';
        }
    }

    static setURLPrefix(path: string): string {
        if (path && path.startsWith('/')) {
            return path;
        } else {
            return '/' + path;
        }
    }

    static removeURLPrefix(path: string): string {
        if (path && path.startsWith('/')) {
            return path.slice(1);
        } else {
            return path;
        }
    }

    static removeURLPostfix(path: string): string {
        if (path && path.endsWith('/')) {
            return path.slice(0, -1);
        } else {
            return path;
        }
    }
}
