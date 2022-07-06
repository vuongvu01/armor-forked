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

const useHeaderNavigationProfileClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            NavigationProfile: appendClassName(
                getClassNameByComponent({
                    component: 'NavigationProfile',
                    classPrefix,
                }),
                className,
            ),
            NavigationProfileWrapper: appendClassName(
                getClassNameByComponent({
                    component: 'NavigationProfileWrapper',
                    classPrefix,
                }),
                className,
            ),
            NavigationProfileMenuItem: getClassNameByComponent({
                component: 'NavigationProfileMenuItem',
                classPrefix,
            }),
            NavigationProfileMenu: getClassNameByComponent({
                component: 'NavigationProfileMenu',
                classPrefix,
            }),
            NavigationProfileButton: getClassNameByComponent({
                component: 'NavigationProfileButton',
                classPrefix,
            }),
            NavigationProfileButtonText: getClassNameByComponent({
                component: 'NavigationProfileButtonText',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationProfileClassName;
