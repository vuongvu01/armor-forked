import { useMemo } from 'react';

import { returnEmptyString, makeBEM, makeClassName } from 'src/utils';
import { TypographyStylesPropsType } from './type';
import { ClassNamesType } from '../type';

export const useTypographyStylesOverride = (
    styles?: TypographyStylesPropsType,
): Required<TypographyStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useTypographyClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    h6?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const rootStateClassNames: string[] = [];
        if (h6) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'h6'));
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`,
        };
    }, [classPrefix, className, classNames, h6]);
