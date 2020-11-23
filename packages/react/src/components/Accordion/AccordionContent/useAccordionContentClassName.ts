import { useMemo } from 'react';

import { getClassNameByComponent } from '../utils';
import { appendClassName } from '../../../utils';

const useAccordionContentClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
    expanded?: boolean,
) =>
    useMemo(
        () => ({
            Content: appendClassName(
                getClassNameByComponent({
                    component: 'Content',
                    classPrefix,
                    disabled,
                    expanded,
                }),
                className,
            ),
        }),
        [classPrefix, className, disabled, expanded],
    );

export default useAccordionContentClassName;
