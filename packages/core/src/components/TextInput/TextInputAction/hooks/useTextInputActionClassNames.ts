import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

export const useTextInputActionClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
        };
    }, [classPrefix, className]);
