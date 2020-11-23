import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '../../../utils';

export const usePageNavigationClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);

        return {
            Root: rootClassNames,
            PageButton: makeBEM(classPrefix, 'PageButton'),
        };
    }, [classPrefix, className]);
