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

export const useSearchIconClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
) =>
    useMemo(() => {
        return {
            BeforeIcon: appendClassName(
                getClassNameByComponent({
                    component: 'BeforeIcon',
                    classPrefix,
                    disabled,
                }),
                className,
            ),
            BeforeIconContainer: getClassNameByComponent({
                component: 'BeforeIconContainer',
                classPrefix,
                disabled,
            }),
        };
    }, [classPrefix, className, disabled]);
