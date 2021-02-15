import { useMemo } from 'react';

import { appendClassName, makeBEM } from '../../../utils';
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

export const useOptionListClassName = (
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
            Item: classGeneratorBasedOnComponent({
                component: 'Item',
                classPrefix,
                disabled,
            }),
            SelectAllItem: classGeneratorBasedOnComponent({
                component: 'SelectAllItem',
                classPrefix,
                disabled,
            }),
            BeforeSectionContainer: classGeneratorBasedOnComponent({
                component: 'BeforeSectionContainer',
                classPrefix,
                disabled,
            }),
            SearchContainer: classGeneratorBasedOnComponent({
                component: 'SearchContainer',
                classPrefix,
                disabled,
            }),
            Search: classGeneratorBasedOnComponent({
                component: 'Search',
                classPrefix,
                disabled,
            }),
        }),
        [classPrefix, className, disabled],
    );