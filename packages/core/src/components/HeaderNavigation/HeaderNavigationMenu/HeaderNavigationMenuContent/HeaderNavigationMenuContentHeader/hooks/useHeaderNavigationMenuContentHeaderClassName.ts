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

const useHeaderNavigationMenuContentHeaderClassName = (
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
            Title: getClassNameByComponent({
                component: 'Title',
                classPrefix,
            }),
            Label: getClassNameByComponent({
                component: 'Label',
                classPrefix,
            }),
            HeaderNavigationMenuContentHeader: getClassNameByComponent({
                component: 'HeaderNavigationMenuContentHeader',
                classPrefix,
            }),
            HeaderNavigationMenuContentHeaderItem: getClassNameByComponent({
                component: 'HeaderNavigationMenuContentHeaderItem',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationMenuContentHeaderClassName;
