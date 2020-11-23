import { useMemo } from 'react';

import { getClassNameByComponent } from '../utils';
import { appendClassName } from '../../../utils';

const useAccordionHeaderClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    expanded?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                getClassNameByComponent({
                    component: 'Root',
                    classPrefix,
                    disabled,
                    expanded,
                }),
                className,
            ),
            HeaderTitle: getClassNameByComponent({
                component: 'HeaderTitle',
                classPrefix,
                disabled,
                expanded,
            }),
            IconContainer: getClassNameByComponent({
                component: 'IconContainer',
                classPrefix,
                disabled,
                expanded,
            }),
            ExpansionIndicator: getClassNameByComponent({
                component: 'ExpansionIndicator',
                classPrefix,
                disabled,
                expanded,
            }),
        }),
        [classPrefix, className, disabled, expanded],
    );

export default useAccordionHeaderClassName;
