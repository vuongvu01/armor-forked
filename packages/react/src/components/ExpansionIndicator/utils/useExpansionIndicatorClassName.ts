import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../utils';

const getComponentClassName = ({
    component,
    classPrefix,
    disabled,
    isExpanded,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    if (isExpanded) {
        stateClassNames.push(makeBEM(classPrefix, component, 'expanded'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

const useExpansionIndicatorClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    isExpanded?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                getComponentClassName({
                    component: 'Root',
                    classPrefix,
                    disabled,
                    isExpanded,
                }),
                className,
            ),
            Content: getComponentClassName({
                component: 'Content',
                classPrefix,
                disabled,
                isExpanded,
            }),
            Icon: getComponentClassName({
                component: 'Icon',
                classPrefix,
                disabled,
                isExpanded,
            }),
        }),
        [classPrefix, className, disabled, isExpanded],
    );

export default useExpansionIndicatorClassName;
