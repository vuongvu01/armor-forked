import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

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
            Action: appendClassName(
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
            ActionContainer: getClassNameByComponent({
                component: 'NavigationActionContainer',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationActionClassName;
