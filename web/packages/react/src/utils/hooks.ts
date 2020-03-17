import { useMemo } from 'react';
import { ClassNames, Styles } from '../components/type';

/**
 * @internal
 */
export const useClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNames,
    elementType = 'root',
) =>
    useMemo(() => {
        return `${classPrefix}-${elementType} ${className || ''} ${
            classNames && classNames[elementType] ? classNames[elementType] : ''
        }`.trim();
    }, [classPrefix, elementType, className, classNames]);
