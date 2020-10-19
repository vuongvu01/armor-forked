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

const useHeaderNavigationActionClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            NavigationAction: getClassNameByComponent({
                component: 'NavigationAction',
                classPrefix,
                className,
                classNames,
            }),
            NavigationActionItem: getClassNameByComponent({
                component: 'NavigationActionItem',
                classPrefix,
                className,
                classNames,
            }),
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationActionClassName;
