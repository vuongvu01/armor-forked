import { useMemo } from 'react';

import { ClassNamesType } from '../../type';
import { ClassBasedOnComponentType } from '../type';
import { makeBEM, makeClassName } from '../../../utils';

const classGeneratorBasedOnComponent = ({
    component,
    classPrefix,
    className,
    classNames,
    disabled,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(
        classPrefix,
        className,
        classNames,
        component,
    );

    const stateClassNames: string[] = [];

    if (disabled) {
        stateClassNames.push(makeBEM(classPrefix, component, 'disabled'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

const useDropdownClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
) =>
    // TODO (nmelnikov 2020-07-23): this pattern is so prominent and cumbersome that we need to do something about it
    useMemo(
        () => ({
            Wrapper: classGeneratorBasedOnComponent({
                component: 'Wrapper',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            Container: classGeneratorBasedOnComponent({
                component: 'Container',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            TextInput: classGeneratorBasedOnComponent({
                component: 'TextInput',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            OptionListContainer: classGeneratorBasedOnComponent({
                component: 'OptionListContainer',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            OptionList: classGeneratorBasedOnComponent({
                component: 'OptionList',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            OptionItem: classGeneratorBasedOnComponent({
                component: 'OptionItem',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            ExpansionIndicatorContainer: classGeneratorBasedOnComponent({
                component: 'ExpansionIndicatorContainer',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            ExpansionIndicator: classGeneratorBasedOnComponent({
                component: 'ExpansionIndicator',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
        }),
        [classPrefix, className, classNames, disabled],
    );

export default useDropdownClassName;
