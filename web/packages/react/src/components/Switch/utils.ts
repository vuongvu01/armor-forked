import { useMemo } from 'react';

import { makeBEM, makeClassName } from '../../utils';
import { ClassBasedOnComponentType } from './type';
import { ClassNamesType } from '../type';

const formClassBasedOnComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    disabled,
    checked,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(classPrefix, className, classNames);

    const stateClassNames: string[] = [];

    if (checked) {
        stateClassNames.push(makeBEM(classPrefix, component, 'checked'));
    }

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`;
};

export const useSwitchClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    checked?: boolean,
) =>
    useMemo(
        () => ({
            Root: formClassBasedOnComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
            }),
            Label: formClassBasedOnComponent({
                component: 'Label',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
            }),
            CheckboxInput: formClassBasedOnComponent({
                component: 'CheckboxInput',
                classPrefix,
                className,
                classNames,
                disabled,
                checked,
            }),
            Slider: formClassBasedOnComponent({
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
