import { useMemo } from 'react';

import { makeRootClassName } from '../../../utils';

export const useIndicatorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
        };
    }, [classPrefix, className]);
