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

export const useDropdownClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
) =>
    // TODO (nmelnikov 2020-07-23): this pattern is so prominent and cumbersome that we need to do something about it
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
            Container: classGeneratorBasedOnComponent({
                component: 'Container',
                classPrefix,
                disabled,
            }),
            TextInput: classGeneratorBasedOnComponent({
                component: 'TextInput',
                classPrefix,
                disabled,
            }),
            OptionListContainer: classGeneratorBasedOnComponent({
                component: 'OptionListContainer',
                classPrefix,
                disabled,
            }),
            OptionList: classGeneratorBasedOnComponent({
                component: 'OptionList',
                classPrefix,
                disabled,
            }),
            OptionItem: classGeneratorBasedOnComponent({
                component: 'OptionItem',
                classPrefix,
                disabled,
            }),
            ExpansionIndicatorContainer: classGeneratorBasedOnComponent({
                component: 'ExpansionIndicatorContainer',
                classPrefix,
                disabled,
            }),
            ExpansionIndicator: classGeneratorBasedOnComponent({
                component: 'ExpansionIndicator',
                classPrefix,
                disabled,
            }),
        }),
        [classPrefix, className, disabled],
    );
