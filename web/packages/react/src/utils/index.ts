import { ClassNamesType } from '../components/type';

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
    elementType = 'root',
) =>
    `${makeBEM(classPrefix, elementType)} ${className || ''} ${
        classNames && classNames[elementType] ? classNames[elementType] : ''
    }`.trim();
