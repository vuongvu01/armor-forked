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

const useHeaderNavigationMenuClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            NavigationMenuItem: appendClassName(
                getClassNameByComponent({
                    component: 'NavigationMenuItem',
                    classPrefix,
                }),
                className,
            ),
            NavigationMenu: getClassNameByComponent({
                component: 'NavigationMenu',
                classPrefix,
            }),
            NavigationMenuContentContainer: getClassNameByComponent({
                component: 'NavigationMenuContentContainer',
                classPrefix,
            }),
            MenuExpansionIndicator: getClassNameByComponent({
                component: 'MenuExpansionIndicator',
                classPrefix,
            }),
            TitleContainer: getClassNameByComponent({
                component: 'TitleContainer',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationMenuClassName;
