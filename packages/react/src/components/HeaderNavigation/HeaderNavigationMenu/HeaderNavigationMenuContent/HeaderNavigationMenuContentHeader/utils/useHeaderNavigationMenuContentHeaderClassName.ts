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

const useHeaderNavigationMenuContentHeaderClassName = (
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
            Title: getClassNameByComponent({
                component: 'Title',
                classPrefix,
                className,
                classNames,
            }),
            Label: getClassNameByComponent({
                component: 'Label',
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
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationMenuContentHeaderClassName;
