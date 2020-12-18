import { useMemo } from 'react';

import { selectorClassGeneratorBasedOnComponent } from '../../../styling';
import { appendClassName } from '../../../utils';

const useSelectorLabelClassName = (
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
        }),
        [classPrefix, className, disabled, checked, error],
    );

export default useSelectorLabelClassName;
