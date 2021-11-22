import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

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
