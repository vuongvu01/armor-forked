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

const useHeaderNavigationSelectorClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            PackItem: appendClassName(
                getClassNameByComponent({
                    component: 'PackItem',
                    classPrefix,
                }),
                className,
            ),
            NavigationSelectorRoot: getClassNameByComponent({
                component: 'NavigationSelectorRoot',
                classPrefix,
            }),
            SelectorDropdown: getClassNameByComponent({
                component: 'SelectorDropdown',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationSelectorClassName;
