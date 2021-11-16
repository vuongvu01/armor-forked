import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

const classGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    disabled,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    const stateClassNames: string[] = [];

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

export const useDropdownBeforeSectionClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                classGeneratorBasedOnComponent({
                    component: 'Root',
                    classPrefix,
                    disabled,
                }),
                className,
            ),
            TagsContainer: classGeneratorBasedOnComponent({
                component: 'TagsContainer',
                classPrefix,
                disabled,
            }),
            TagsWrapper: classGeneratorBasedOnComponent({
                component: 'TagsWrapper',
                classPrefix,
                disabled,
            }),
            ActionContainer: classGeneratorBasedOnComponent({
                component: 'ActionContainer',
                classPrefix,
                disabled,
            }),
            ClearButton: classGeneratorBasedOnComponent({
                component: 'ClearButton',
                classPrefix,
                disabled,
            }),
            DropdownTagRemainingItems: classGeneratorBasedOnComponent({
                component: 'DropdownTagRemainingItems',
                classPrefix,
                disabled,
            }),
        }),
        [classPrefix, className, disabled],
    );
