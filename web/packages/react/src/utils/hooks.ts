import { useMemo } from 'react';
import { ClassNamesType } from '../components/type';
import { makeClassName } from './index';

/**
 * @internal
 */
export const useClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    elementType = 'Root',
) =>
    useMemo(() => {
        return makeClassName(classPrefix, className, classNames, elementType);
    }, [classPrefix, elementType, className, classNames]);

/**
 * @internal
 */
export const useObject = (value: any) => useMemo(() => value || {}, [value]);
