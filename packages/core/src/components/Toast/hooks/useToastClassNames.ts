import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useToastClassNames = (classPrefix: string, className?: string) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Group: makeBEM(classPrefix, 'Group'),
            Item: makeBEM(classPrefix, 'Item'),
        };
    }, [classPrefix, className]);
