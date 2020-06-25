import { useMemo } from 'react';
import { FormFieldMessageStylesPropsType } from './type';
import { returnEmptyString, makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useFormFieldMessageStylesOverride = (
    styles?: FormFieldMessageStylesPropsType,
): Required<FormFieldMessageStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useFormFieldMessageClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    error?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeClassName(
            classPrefix,
            className,
            classNames,
        );
        const rootStateClassNames: string[] = [];
        if (error) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'error'));
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`,
        };
    }, [classPrefix, className, classNames, error]);
