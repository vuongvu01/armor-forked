import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

export const useDialogClassNames = (
    classPrefix: string,
    open: boolean,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: `${makeRootClassName(classPrefix, className)} ${makeBEM(
                classPrefix,
                'Root',
                open ? 'open' : 'closed',
            )}`,
            Backdrop: makeBEM(classPrefix, 'Backdrop'),
            AlignmentContainer: makeBEM(classPrefix, 'AlignmentContainer'),
            Window: makeBEM(classPrefix, 'Window'),
            CloseButton: makeBEM(classPrefix, 'CloseButton'),
            Content: makeBEM(classPrefix, 'Content'),
        };
    }, [classPrefix, className, open]);
