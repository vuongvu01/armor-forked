import { useMemo } from 'react';

import getClassNameByComponent from './getClassNameByComponent';
import { appendClassName } from '../../../utils';

const useAccordionClassName = (
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

export default useAccordionClassName;
