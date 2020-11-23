import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../../utils';

const getClassNameByComponent = ({
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

export const useSearchClearActionClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
) =>
    useMemo(() => {
        return {
            AfterIcon: appendClassName(
                getClassNameByComponent({
                    component: 'AfterIcon',
                    classPrefix,
                    disabled,
                }),
                className,
            ),
            AfterIconContainer: getClassNameByComponent({
                component: 'AfterIconContainer',
                classPrefix,
                disabled,
            }),
        };
    }, [classPrefix, className, disabled]);
