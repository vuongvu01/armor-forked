import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

export const useDialogClassNames = (classPrefix: string, className?: string) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Backdrop: makeBEM(classPrefix, 'Backdrop'),
            AlignmentContainer: makeBEM(classPrefix, 'AlignmentContainer'),
            Window: makeBEM(classPrefix, 'Window'),
            CloseButton: makeBEM(classPrefix, 'CloseButton'),
            Content: makeBEM(classPrefix, 'Content'),
        };
    }, [classPrefix, className]);
