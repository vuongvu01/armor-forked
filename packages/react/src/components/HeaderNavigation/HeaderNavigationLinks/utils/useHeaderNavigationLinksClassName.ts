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

const useHeaderNavigationLinksClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(() => {
        return {
            Root: getClassNameByComponent({
                component: 'LinksRoot',
                classPrefix,
                className,
                classNames,
            }),
            Container: getClassNameByComponent({
                component: 'Container',
                classPrefix,
                className,
                classNames,
            }),
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationLinksClassName;
