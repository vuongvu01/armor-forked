import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

export const useBadgeClassName = (classPrefix: string, className?: string) =>
    useMemo(
        () => ({
            Root: appendClassName(makeBEM(classPrefix, 'Root'), className),
        }),
        [classPrefix, className],
    );
