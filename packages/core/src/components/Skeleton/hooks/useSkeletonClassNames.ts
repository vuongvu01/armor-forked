import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

export const useSkeletonClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            CoverSheet: makeBEM(classPrefix, 'CoverSheet'),
        };
    }, [classPrefix, className]);
