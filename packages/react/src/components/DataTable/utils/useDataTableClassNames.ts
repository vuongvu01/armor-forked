import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';

export const useDataTableClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Footer: makeBEM(classPrefix, 'Footer'),
        };
    }, [classPrefix, className]);
