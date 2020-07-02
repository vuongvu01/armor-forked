import { useMemo } from 'react';
import { FormFieldStylesPropsType } from './type';
import { returnEmptyString, makeClassName } from '../../utils';
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
