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

const useHeaderNavigationLinksClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: appendClassName(
                getClassNameByComponent({
                    component: 'LinksRoot',
                    classPrefix,
                }),
                className,
            ),
            Container: getClassNameByComponent({
                component: 'Container',
                classPrefix,
            }),
        };
    }, [classPrefix, className]);

export default useHeaderNavigationLinksClassName;
