import { useMemo } from 'react';

import { ClassNamesType } from '../../type';
import { makeClassName } from '../../../utils';

const useTabViewClassName = (
    classPrefix: string,
    className?: string,
    classNames?: ClassNamesType,
) =>
    useMemo(
        () => ({
            Root: makeClassName(classPrefix, className, classNames, 'Root'),
        }),
        [classPrefix, className, classNames],
    );

export default useTabViewClassName;