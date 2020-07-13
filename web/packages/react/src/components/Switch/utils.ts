import { useMemo } from 'react';

import { selectorClassGeneratorBasedOnComponent } from '../../styling';
import { ClassNamesType } from '../type';

export const useSwitchClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    checked?: boolean,
) =>
    useMemo(
        () => ({
            Root: selectorClassGeneratorBasedOnComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
            }),
            Label: selectorClassGeneratorBasedOnComponent({
                component: 'Label',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
            }),
            CheckboxInput: selectorClassGeneratorBasedOnComponent({
                component: 'CheckboxInput',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
            }),
            Slider: selectorClassGeneratorBasedOnComponent({
                component: 'Slider',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
            }),
        }),
        [classPrefix, className, classNames, disabled, checked],
    );
