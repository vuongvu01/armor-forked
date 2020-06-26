import { useMemo } from 'react';
import { IndicatorStylesPropsType } from './type';
import { returnEmptyString, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useIndicatorStylesOverride = (
    styles?: IndicatorStylesPropsType,
): Required<IndicatorStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useIndicatorClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Root: makeClassName(classPrefix, className, classNames),
        };
    }, [classPrefix, className, classNames]);
