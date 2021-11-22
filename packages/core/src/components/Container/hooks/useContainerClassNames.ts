import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

export const useContainerClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
        };
    }, [classPrefix, className]);
