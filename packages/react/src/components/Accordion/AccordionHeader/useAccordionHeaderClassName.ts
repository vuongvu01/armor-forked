import { useMemo } from 'react';

import { getClassNameByComponent } from '../utils';
import { ClassNamesType } from '../../type';

const useAccordionHeaderClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    expanded?: boolean,
) =>
    useMemo(
        () => ({
            Header: getClassNameByComponent({
                component: 'Header',
                classPrefix,
                className,
                classNames,
                disabled,
                expanded,
            }),
            HeaderTitle: getClassNameByComponent({
                component: 'HeaderTitle',
                classPrefix,
                className,
                classNames,
                disabled,
                expanded,
            }),
            IconContainer: getClassNameByComponent({
                component: 'IconContainer',
                classPrefix,
                className,
                classNames,
                disabled,
                expanded,
            }),
            Icon: getClassNameByComponent({
                component: 'Icon',
                classPrefix,
                className,
                classNames,
                disabled,
                expanded,
            }),
        }),
        [classPrefix, className, classNames, disabled, expanded],
    );

export default useAccordionHeaderClassName;
