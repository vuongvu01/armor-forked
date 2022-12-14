import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { getClassNameByComponent } from '../../utils';
import { ACCORDION_HEADER_CLASS_PREFIX } from '../../constants';

export const useAccordionHeaderClassName = (
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
