import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

import { getClassNameByComponent } from '../../utils';
import { ACCORDION_CONTENT_CLASS_PREFIX } from '../../constants';

export const useAccordionContentClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    expanded?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(
                [
                    getClassNameByComponent({
                        component: 'Content',
                        classPrefix,
                        disabled,
                        expanded,
                    }),
                    makeBEM(ACCORDION_CONTENT_CLASS_PREFIX, 'Root'),
                ].join(' '),
                className,
            ),
        }),
        [classPrefix, className, disabled, expanded],
    );
