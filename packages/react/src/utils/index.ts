import deepMerge from 'deepmerge';
import { ReactText } from 'react';
import { ClassNamesType } from '../components/type';
import { ObjectLiteralType } from '../type';
import {
    marginAttributesList,
    paddingAttributesList,
    sizeAttributesList,
    styleAttributesList,
    textAlignmentAttributesList,
    displayAttributesList,
    colorAttributesList,
} from '../system/attributes';

export { default as generateId } from './generateId';
export { default as getElementName } from './getElementName';

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

const systemAttributeList = {
    ...marginAttributesList,
    ...paddingAttributesList,
    ...styleAttributesList,
    ...sizeAttributesList,
    ...textAlignmentAttributesList,
    ...displayAttributesList,
    ...colorAttributesList,
};

/**
 * @internal
 */
export const shouldForwardProp = (
    property: ReactText,
    componentPropertyList: ObjectLiteralType = {},
) => !(property in componentPropertyList) && !(property in systemAttributeList);

export * from './makePropList';
