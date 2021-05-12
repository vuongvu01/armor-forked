import deepMerge from 'deepmerge';
import { ObjectLiteralType, PropNameType } from '../type';
import {
    colorAttributesList,
    displayAttributesList,
    marginAttributesList,
    paddingAttributesList,
    sizeAttributesList,
    styleAttributesList,
    textAlignmentAttributesList,
} from '../system';

export { default as generateId } from './generateId';
export { default as getElementName } from './getElementName';
export { default as useDetectClickOutsideComponent } from './useDetectClickOutsideComponent';
export * from './useDetectEscapeKeyPressed';
export * from './dropdown';
export * from './noop';
export * from './stringEllipsisAtMaxCharacters';

/**
 * @internal
 */
export const makeBEM = (block: string, element: string, modifier?: string) =>
    `${block}-${element}${modifier ? `--${modifier}` : ''}`;

/**
 * @internal
 */
export const appendBEMModifier = (blockElement: string, modifier: string) =>
    `${blockElement}--${modifier}`;

/**
 * @internal
 */
export const appendBEMModifierOnCondition = (
    blockElement: string,
    modifier: string,
    condition: boolean,
) => (condition ? `${blockElement}--${modifier}` : '');

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
