import { useMemo } from 'react';

import { getClassNameByComponent } from '../../utils';
import { appendClassName, makeBEM } from '../../../../utils';
import { ACCORDION_HEADER_CLASS_PREFIX } from '../../constants';

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
            Body: makeBEM(ACCORDION_HEADER_CLASS_PREFIX, 'Body'),
            Title: getClassNameByComponent({
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
