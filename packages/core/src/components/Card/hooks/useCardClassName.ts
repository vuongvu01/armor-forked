import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

export const useCardClassName = (classPrefix: string, className?: string) =>
    useMemo(() => {
        const baseClassNames = makeRootClassName(classPrefix, className);

        return baseClassNames;
    }, [classPrefix, className]);
