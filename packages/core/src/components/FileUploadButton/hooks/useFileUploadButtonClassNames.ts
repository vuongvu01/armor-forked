import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

export const useFileUploadButtonClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Button: makeBEM(classPrefix, 'Button'),
            Input: makeBEM(classPrefix, 'Input'),
        };
    }, [classPrefix, className]);
