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
            ItemSearch: appendClassName(
                getClassNameByComponent({
                    component: 'ItemSearch',
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
