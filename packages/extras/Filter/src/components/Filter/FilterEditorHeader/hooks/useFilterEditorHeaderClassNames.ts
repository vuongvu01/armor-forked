import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useFilterEditorHeaderClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Title: makeBEM(classPrefix, 'Title'),
            ClearAllButton: makeBEM(classPrefix, 'ClearAllButton'),
        };
    }, [classPrefix, className]);
