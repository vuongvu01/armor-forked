import { useMemo } from 'react';

import { ClassNamesType } from '../../../../type';
import { makeClassName } from '../../../../../utils';
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

const useHeaderNavigationLinkClassName = (
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
            Link: getClassNameByComponent({
                component: 'Link',
                classPrefix,
                className,
                classNames,
            }),
            Href: getClassNameByComponent({
                component: 'Href',
                classPrefix,
                className,
                classNames,
            }),
        };
    }, [classPrefix, className, classNames]);

export default useHeaderNavigationLinkClassName;
