import { useMemo } from 'react';

import { makeBEM, makeRootClassName } from '../../../utils';

export const useDialogClassNames = (classPrefix: string, className?: string) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Overlay: makeBEM(classPrefix, 'Overlay'),
            AlignmentContainer: makeBEM(classPrefix, 'AlignmentContainer'),
            Base: makeBEM(classPrefix, 'Base'),
            CloseButton: makeBEM(classPrefix, 'CloseButton'),
            Content: makeBEM(classPrefix, 'Content'),
        };
    }, [classPrefix, className]);
