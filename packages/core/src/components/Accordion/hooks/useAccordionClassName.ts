import { useMemo } from 'react';
import { appendClassName } from '@deliveryhero/armor-system';

import getClassNameByComponent from '../utils/getClassNameByComponent';

export const useAccordionClassName = (
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
        }),
        [classPrefix, className, disabled, expanded],
    );
