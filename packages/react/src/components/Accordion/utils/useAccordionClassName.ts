import { useMemo } from 'react';

import { ClassNamesType } from '../../type';
import getClassNameByComponent from './getClassNameByComponent';

const useAccordionClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
    disabled?: boolean,
    expanded?: boolean,
) =>
    useMemo(
        () => ({
            Root: getClassNameByComponent({
                component: 'Root',
                classPrefix,
                className,
                classNames,
                disabled,
                expanded,
            }),
        }),
        [classPrefix, className, classNames, disabled],
    );

export default useAccordionClassName;
