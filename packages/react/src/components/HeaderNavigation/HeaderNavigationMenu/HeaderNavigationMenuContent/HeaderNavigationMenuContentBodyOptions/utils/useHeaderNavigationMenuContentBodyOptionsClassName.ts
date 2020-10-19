import { useMemo } from 'react';

import { ClassNamesType } from '../../../../../type';
import { makeClassName } from '../../../../../../utils';
import { ClassBasedOnComponentType } from '../type';

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

const useHeaderNavigationMenuContentClassName = (
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
            Item: getClassNameByComponent({
                component: 'Item',
                classPrefix,
                className,
                classNames,
            }),
            Category: getClassNameByComponent({
                component: 'Category',
                classPrefix,
                className,
                classNames,
            }),
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationMenuContentClassName;
