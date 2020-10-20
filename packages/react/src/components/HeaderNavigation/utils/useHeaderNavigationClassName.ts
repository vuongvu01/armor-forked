import { useMemo } from 'react';

import { ClassNamesType } from '../../type';
import { ClassBasedOnComponentType } from '../type';
import { makeClassName } from '../../../utils';

const getClassNameByComponent = ({
    component,
    classPrefix,
    className,
    classNames,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeClassName(
        classPrefix,
        className,
        classNames,
        component,
    );

    return `${baseClassNames}`.trim();
};

const useHeaderNavigationClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Root: getClassNameByComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
            }),
            Pack: getClassNameByComponent({
                component: 'Pack',
                classPrefix,
                className,
                classNames,
            }),
            PackItem: getClassNameByComponent({
                component: 'PackItem',
                classPrefix,
                className,
                classNames,
            }),
            NavigationMenu: getClassNameByComponent({
                component: 'NavigationMenu',
                classPrefix,
                className,
                classNames,
            }),
            NavigationTitle: getClassNameByComponent({
                component: 'NavigationTitle',
                classPrefix,
                className,
                classNames,
            }),
            NavigationSelector: getClassNameByComponent({
                component: 'NavigationSelector',
                classPrefix,
                className,
                classNames,
            }),
            NavigationAction: getClassNameByComponent({
                component: 'NavigationAction',
                classPrefix,
                className,
                classNames,
            }),
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationClassName;
