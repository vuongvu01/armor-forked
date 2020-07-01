import { useMemo } from 'react';

import { returnEmptyString, makeClassName } from 'src/utils';
import { FormFieldStylesPropsType } from './type';
import { ClassNamesType } from '../type';

export const useFormFieldStylesOverride = (
    styles?: FormFieldStylesPropsType,
): Required<FormFieldStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useFormFieldClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Root: makeClassName(classPrefix, className, classNames),
        };
    }, [classPrefix, className, classNames]);
