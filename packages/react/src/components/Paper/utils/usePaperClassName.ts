import { useMemo } from 'react';

import { makeRootClassName } from '../../../utils';

export const usePaperClassName = (classPrefix: string, className?: string) =>
    useMemo(() => {
        const baseClassNames = makeRootClassName(classPrefix, className);

        return baseClassNames;
    }, [classPrefix, className]);
