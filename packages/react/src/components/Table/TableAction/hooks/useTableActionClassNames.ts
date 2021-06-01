import { useMemo } from 'react';
import { makeRootClassName } from '../../../../utils';

export const useTableActionClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);

        return {
            Root: rootClassNames,
        };
    }, [classPrefix, className]);