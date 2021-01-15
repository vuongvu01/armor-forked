import deepMerge from 'deepmerge';
import { ReactText } from 'react';
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
export { default as useDetectClickOutsideComponent } from './useDetectClickOutsideComponent';
export * from './useDetectEscapeKeyPressed';
export * from './useInternalRef';
export * from './dropdown';

/**
 * @internal
 */
export const makeBEM = (block: string, element: string, modifier?: string) =>
    `${block}-${element}${modifier ? `--${modifier}` : ''}`;

/**
 * @internal
 */
export const appendClassName = (classNames: string, className?: string) =>
    `${classNames} ${className || ''}`.trim();

/**
 * @internal
 */
export const makeRootClassName = (classPrefix: string, className?: string) =>
    appendClassName(makeBEM(classPrefix, 'Root'), className);

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
