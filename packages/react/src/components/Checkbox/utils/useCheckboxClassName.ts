import { useMemo } from 'react';

import { selectorClassGeneratorBasedOnComponent } from '../../../styling';
import { appendClassName, makeBEM } from '../../../utils';

export const useCheckboxClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    checked?: boolean,
    error?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                selectorClassGeneratorBasedOnComponent({
                    component: 'Root',
                    classPrefix,
                    disabled,
                    checked,
                    error,
                }),
                className,
            ),
            Input: selectorClassGeneratorBasedOnComponent({
                component: 'Input',
                classPrefix,
                disabled,
                checked,
                error,
            }),
            Checkmark: selectorClassGeneratorBasedOnComponent({
                component: 'Checkmark',
                classPrefix,
                disabled,
                checked,
                error,
            }),
            Label: makeBEM(classPrefix, 'Label'),
        }),
        [classPrefix, className, disabled, checked, error],
    );
