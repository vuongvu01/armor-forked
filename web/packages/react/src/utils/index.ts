import { ClassNamesType } from '../components/type';

export const returnEmptyString = () => '';

export const makeClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    elementType = 'root',
) =>
    `${classPrefix}-${elementType} ${className || ''} ${
        classNames && classNames[elementType] ? classNames[elementType] : ''
    }`.trim();
