import deepMerge from 'deepmerge';
// @ts-ignore
// import clone from 'deepclone';
import { ClassNamesType } from '../components/type';
import { ObjectLiteralType } from '../type';

/**
 * @internal
 */
export const returnEmptyString = () => '';

/**
 * @internal
 */
export const makeBEM = (block: string, element: string, modifier?: string) =>
    `${block}-${element}${modifier ? `--${modifier}` : ''}`;

/**
 * @internal
 */
export const makeClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    elementType = 'Root',
) =>
    `${makeBEM(classPrefix, elementType)} ${className || ''} ${
        classNames && classNames[elementType] ? classNames[elementType] : ''
    }`.trim();

/**
 * @internal
 */
export const merge = (dst: ObjectLiteralType, src: ObjectLiteralType) =>
    deepMerge(dst, src || {}, {
        arrayMerge: (destinationArray: any[], sourceArray: any[]) =>
            sourceArray,
    });

// function isPlainObj(o: any) {
//     return typeof o === 'object' && o.constructor === Object;
// }

// export const fastMerge = (dst: ObjectLiteralType, src: ObjectLiteralType) => {
//     if (isPlainObj(src) && isPlainObj(dst)) {
//         // eslint-disable-next-line no-restricted-syntax
//         for (const k in src) {
//             // eslint-disable-next-line no-prototype-builtins
//             if (src.hasOwnProperty(k)) {
//                 // eslint-disable-next-line no-param-reassign
//                 dst[k] = fastMerge(dst[k], src[k]);
//             }
//         }
//         return dst;
//     }
//
//     if (Array.isArray(src)) {
//         return [...src];
//     }
//
//     return src;
// };
