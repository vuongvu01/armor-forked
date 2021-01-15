import deepMerge from 'deepmerge';
import { ReactText } from 'react';
import { ObjectLiteralType, PropNameType } from '../type';
import {
    marginAttributesList,
    paddingAttributesList,
    sizeAttributesList,
    styleAttributesList,
    textAlignmentAttributesList,
    displayAttributesList,
    colorAttributesList,
} from '../system/attributes';
import { TextInputRootPropsType } from '../components/TextInput/type';

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

const atomicPropsList = {
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
    property: PropNameType,
    componentPropertyList: ObjectLiteralType = {},
    blockAtomicProps = true,
) =>
    !(property in componentPropertyList) &&
    !(blockAtomicProps && property in atomicPropsList);

/**
 * @internal
 */
export const getPropsBlocker = (
    propertyList?: ObjectLiteralType<boolean>,
    blockAtomicProps = true,
) => {
    return {
        shouldForwardProp: (propertyName: PropNameType) =>
            shouldForwardProp(propertyName, propertyList, blockAtomicProps),
    };
};

export * from './makePropList';
