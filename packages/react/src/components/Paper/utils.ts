import { useMemo } from 'react';

import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { PaperStylesPropsType } from './type';
import { ClassNamesType } from '../type';

export const useStylesOverridePaper = (
    styles?: PaperStylesPropsType,
): Required<PaperStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useClassNamePaper = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        const baseClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );

        return baseClassNames;
    }, [classPrefix, className, classNames]);
