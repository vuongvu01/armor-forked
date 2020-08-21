import { useMemo } from 'react';

import { selectorClassGeneratorBasedOnComponent } from '../../../styling';
import { ClassNamesType } from '../../type';

const useRadioClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    checked?: boolean,
    error?: boolean,
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
                error,
            }),
            Input: selectorClassGeneratorBasedOnComponent({
                component: 'Input',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
                error,
            }),
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

export default useRadioClassName;
