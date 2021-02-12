import { ObjectLiteralType } from '../type';

/* @deprecated */
export const makePropList = (list: string[]) => {
    const result: ObjectLiteralType = {};

    list.forEach(property => {
        result[property] = true;
    });

    return result;
};
