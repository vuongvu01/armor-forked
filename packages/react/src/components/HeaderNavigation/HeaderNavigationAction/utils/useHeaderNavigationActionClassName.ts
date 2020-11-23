import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    return `${baseClassNames}`.trim();
};

const useHeaderNavigationActionClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            NavigationAction: appendClassName(
                getClassNameByComponent({
                    component: 'NavigationAction',
                    classPrefix,
                }),
                className,
            ),
            NavigationActionItem: getClassNameByComponent({
                component: 'NavigationActionItem',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationActionClassName;
