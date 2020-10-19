import { useMemo } from 'react';

import { ClassNamesType } from '../../../type';
import { ClassBasedOnComponentType } from '../type';
import { makeClassName } from '../../../../utils';

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

const useHeaderNavigationSelectorClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            PackItem: getClassNameByComponent({
                component: 'PackItem',
                classPrefix,
                className,
                classNames,
            }),
            NavigationSelectorRoot: getClassNameByComponent({
                component: 'NavigationSelectorRoot',
                classPrefix,
                className,
                classNames,
            }),
            SelectorDropdown: getClassNameByComponent({
                component: 'SelectorDropdown',
                classPrefix,
                className,
                classNames,
            }),
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationSelectorClassName;
