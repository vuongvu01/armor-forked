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
            HeaderNavigationContent: getClassNameByComponent({
                component: 'HeaderNavigationContent',
                classPrefix,
            }),
            HeaderNavigationContentItem: getClassNameByComponent({
                component: 'HeaderNavigationContentItem',
                classPrefix,
            }),
            HeaderNavigationContentLeft: getClassNameByComponent({
                component: 'HeaderNavigationContentLeft',
                classPrefix,
            }),
            NavigationTitle: getClassNameByComponent({
                component: 'NavigationTitle',
                classPrefix,
            }),
            HeaderNavigationItem: getClassNameByComponent({
                component: 'HeaderNavigationItem',
                classPrefix,
            }),
            HeaderNavigationContentRight: getClassNameByComponent({
                component: 'HeaderNavigationContentRight',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationClassName;
