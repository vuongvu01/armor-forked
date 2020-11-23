import { useMemo } from 'react';

import { selectorClassGeneratorBasedOnComponent } from '../../../styling';
import { appendClassName } from '../../../utils';

const useRadioClassName = (
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
            Label: selectorClassGeneratorBasedOnComponent({
                component: 'Label',
                classPrefix,
                disabled,
                checked,
                error,
            }),
        }),
        [classPrefix, className, disabled, checked, error],
    );

export default useRadioClassName;
