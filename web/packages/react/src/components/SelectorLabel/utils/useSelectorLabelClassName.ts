import { useMemo } from 'react';

import { selectorClassGeneratorBasedOnComponent } from '../../../styling';
import { ClassNamesType } from '../../type';

const useSelectorLabelClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    checked?: boolean,
    error?: boolean,
) =>
    useMemo(
        () => ({
            Label: selectorClassGeneratorBasedOnComponent({
                component: 'Label',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
                error,
            }),
        }),
        [classPrefix, className, classNames, disabled, checked, error],
    );

export default useSelectorLabelClassName;
