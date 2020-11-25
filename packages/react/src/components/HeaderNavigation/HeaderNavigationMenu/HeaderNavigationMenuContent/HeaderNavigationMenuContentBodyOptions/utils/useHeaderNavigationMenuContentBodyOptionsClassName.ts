import { useMemo } from 'react';

import { appendClassName, makeBEM } from '../../../../../../utils';
import { ClassBasedOnComponentType } from '../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    return `${baseClassNames}`.trim();
};

const useHeaderNavigationMenuContentClassName = (
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
            Item: getClassNameByComponent({
                component: 'Item',
                classPrefix,
            }),
            Category: getClassNameByComponent({
                component: 'Category',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationMenuContentClassName;
