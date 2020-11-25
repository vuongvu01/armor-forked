import { useMemo } from 'react';

import { ClassBasedOnComponentType } from '../type';
import { appendClassName, makeBEM } from '../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    return `${baseClassNames}`.trim();
};

const useHeaderNavigationClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: appendClassName(
                getClassNameByComponent({
                    component: 'Root',
                    classPrefix,
                }),
                className,
            ),
            Pack: getClassNameByComponent({
                component: 'Pack',
                classPrefix,
            }),
            PackItem: getClassNameByComponent({
                component: 'PackItem',
                classPrefix,
            }),
            NavigationMenu: getClassNameByComponent({
                component: 'NavigationMenu',
                classPrefix,
            }),
            NavigationTitle: getClassNameByComponent({
                component: 'NavigationTitle',
                classPrefix,
            }),
            NavigationSelector: getClassNameByComponent({
                component: 'NavigationSelector',
                classPrefix,
            }),
            NavigationAction: getClassNameByComponent({
                component: 'NavigationAction',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationClassName;
