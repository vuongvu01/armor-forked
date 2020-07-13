import { useMemo } from 'react';

import { selectorClassGeneratorBasedOnComponent } from '../../../styling';
import { ClassNamesType } from '../../type';

const useRadioClassName = (
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
            Input: selectorClassGeneratorBasedOnComponent({
                component: 'Input',
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
        }),
        [classPrefix, className, classNames, disabled, checked],
    );

export default useRadioClassName;
