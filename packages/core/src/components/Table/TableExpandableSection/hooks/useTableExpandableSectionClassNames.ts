import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useTableExpandableSectionClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Cell: makeBEM(classPrefix, 'Cell'),
            Content: makeBEM(classPrefix, 'Content'),
        };
    }, [classPrefix, className]);
