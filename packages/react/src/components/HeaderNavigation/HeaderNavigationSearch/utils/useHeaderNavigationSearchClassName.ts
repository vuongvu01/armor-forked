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

const useHeaderNavigationSearchClassName = (
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
            NavigationSearchRoot: getClassNameByComponent({
                component: 'NavigationSearchRoot',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationSearchClassName;
