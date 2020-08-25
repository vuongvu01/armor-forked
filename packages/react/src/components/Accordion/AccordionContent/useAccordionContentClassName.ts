import { useMemo } from 'react';

import { getClassNameByComponent } from '../utils';
import { ClassNamesType } from '../../type';

const useAccordionContentClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    expanded?: boolean,
) =>
    useMemo(
        () => ({
            Content: getClassNameByComponent({
                component: 'Content',
                classPrefix,
                className,
                classNames,
                disabled,
                expanded,
            }),
        }),
        [classPrefix, className, classNames, disabled, expanded],
    );

export default useAccordionContentClassName;
