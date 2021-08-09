import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

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
