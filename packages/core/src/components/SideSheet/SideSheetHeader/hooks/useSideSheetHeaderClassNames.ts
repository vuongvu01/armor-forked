import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useSideSheetHeaderClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Title: makeBEM(classPrefix, 'Title'),
            Description: makeBEM(classPrefix, 'Description'),
        };
    }, [classPrefix, className]);
