import { ObjectLiteralType } from '../type';

export const makePropList = (list: string[]) => {
    const result: ObjectLiteralType = {};

    list.forEach(property => {
        result[property] = true;
    });

    return result;
};
