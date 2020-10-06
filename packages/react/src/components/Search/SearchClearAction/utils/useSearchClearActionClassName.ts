import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { makeBEM, makeClassName } from '../../../../utils';
import { ClassNamesType } from '../../../type';

const getClassNameByComponent = ({
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

export const useSearchClearActionClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
) =>
    useMemo(() => {
        return {
            AfterIcon: getClassNameByComponent({
                component: 'AfterIcon',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
            AfterIconContainer: getClassNameByComponent({
                component: 'AfterIconContainer',
                classPrefix,
                className,
                classNames,
                disabled,
            }),
        };
    }, [classPrefix, className, classNames, disabled]);
