import { useMemo } from 'react';

import { returnEmptyString, makeClassName } from '../../utils';
import { IndicatorStylesPropsType } from './type';
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
