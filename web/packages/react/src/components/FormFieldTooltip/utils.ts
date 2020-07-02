import { useMemo } from 'react';
import { FormFieldTooltipStylesPropsType } from './type';
import { returnEmptyString, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

export const useFormFieldTooltipStylesOverride = (
    styles?: FormFieldTooltipStylesPropsType,
): Required<FormFieldTooltipStylesPropsType> =>
    useMemo(
        () => ({
            Root: returnEmptyString,
            Indicator: returnEmptyString,
            ...styles,
        }),
        [styles],
    );

export const useFormFieldTooltipClassNames = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    visible?: boolean,
) =>
    useMemo(() => {
        return {
            Root: makeClassName(classPrefix, className, classNames),
            Indicator: makeClassName(
                classPrefix,
                className,
                classNames,
                'Indicator',
            ),
        };
    }, [classPrefix, className, classNames, visible]);
