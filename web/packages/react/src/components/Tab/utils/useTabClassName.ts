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
    isActive,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(classPrefix, className, classNames);

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
    classNames?: ClassNamesType,
    disabled?: boolean,
    isActive?: boolean,
) =>
    useMemo(
        () => ({
            Root: classGeneratorBasedOnComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                disabled,
                isActive,
            }),
        }),
        [classPrefix, className, classNames, disabled, isActive],
    );

export default useTabClassName;
