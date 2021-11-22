import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useFilterEditorActionsClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            CloseButton: makeBEM(classPrefix, 'CloseButton'),
            ApplyButton: makeBEM(classPrefix, 'ApplyButton'),
        };
    }, [classPrefix, className]);
