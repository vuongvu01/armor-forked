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

const useHeaderNavigationSearchClassName = (
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
            NavigationSearchRoot: getClassNameByComponent({
                component: 'NavigationSearchRoot',
                classPrefix,
                className,
                classNames,
            }),
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationSearchClassName;