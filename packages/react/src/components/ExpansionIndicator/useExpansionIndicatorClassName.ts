import { useMemo } from 'react';

import { ClassBasedOnComponentType } from './type';
import { makeBEM, makeClassName } from '../../utils';
import { ClassNamesType } from '../type';

const getComponentClassName = ({
    component,
    classPrefix,
    className,
    classNames,
    disabled,
    isExpanded,
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

    if (isExpanded) {
        stateClassNames.push(makeBEM(classPrefix, component, 'expanded'));
    }

    return `${baseClassNames} ${stateClassNames.join(' ')}`.trim();
};

const useExpansionIndicatorClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    isExpanded?: boolean,
) =>
    useMemo(
        () => ({
            Root: getComponentClassName({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                disabled,
                isExpanded,
            }),
            Content: getComponentClassName({
                component: 'Content',
                classPrefix,
                className,
                classNames,
                disabled,
                isExpanded,
            }),
            Icon: getComponentClassName({
                component: 'Icon',
                classPrefix,
                className,
                classNames,
                disabled,
                isExpanded,
            }),
        }),
        [classPrefix, className, classNames, disabled, isExpanded],
    );

export default useExpansionIndicatorClassName;
