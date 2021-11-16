import { makeBEM } from './bem';

/**
 * @internal
 */
export const appendClassName = (
    classNames: string,
    className?: string,
): string => `${classNames} ${className || ''}`.trim();

/**
 * @internal
 */
export const makeRootClassName = (
    classPrefix: string,
    className?: string,
): string => appendClassName(makeBEM(classPrefix, 'Root'), className);
