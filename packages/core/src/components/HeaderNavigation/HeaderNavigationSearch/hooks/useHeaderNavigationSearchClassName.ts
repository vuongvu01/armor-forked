import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { ClassBasedOnComponentType } from '../type';

const getClassNameByComponent = ({
    component,
    classPrefix,
}: ClassBasedOnComponentType) => {
    const baseClassNames = makeBEM(classPrefix, component);

    return `${baseClassNames}`.trim();
};

export const useHeaderNavigationSearchClassName = (
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
