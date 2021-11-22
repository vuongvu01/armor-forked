import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

const classGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    disabled,
    isActive,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (isActive) {
        stateClassNames.push(makeBEM(classPrefix, component, 'active'));
    }

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

const useTabClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    isActive?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                classGeneratorBasedOnComponent({
                    component: 'Root',
                    classPrefix,
                    disabled,
                    isActive,
                }),
                className,
            ),
            Tag: classGeneratorBasedOnComponent({
                component: 'LabelContainer',
                classPrefix,
                disabled,
                isActive,
            }),
            Label: classGeneratorBasedOnComponent({
                component: 'Label',
                classPrefix,
                disabled,
                isActive,
            }),
        }),
        [classPrefix, className, disabled, isActive],
    );

export default useTabClassName;
