import { useMemo } from 'react';
import { appendClassName } from '@deliveryhero/armor-system';

import { selectorClassGeneratorBasedOnComponent } from '../../../styling';

export const useSwitchClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    checked?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                selectorClassGeneratorBasedOnComponent({
                    component: 'Root',
                    classPrefix,
                    disabled,
                    checked,
                }),
                className,
            ),
            Label: selectorClassGeneratorBasedOnComponent({
                component: 'Label',
                classPrefix,
                disabled,
                checked,
            }),
            CheckboxInput: selectorClassGeneratorBasedOnComponent({
                component: 'CheckboxInput',
                classPrefix,
                disabled,
                checked,
            }),
            Slider: selectorClassGeneratorBasedOnComponent({
                component: 'Slider',
                classPrefix,
                disabled,
                checked,
            }),
        }),
        [classPrefix, className, disabled, checked],
    );
