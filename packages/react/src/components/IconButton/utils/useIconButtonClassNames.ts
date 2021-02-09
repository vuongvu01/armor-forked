import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../utils';

export const useIconButtonClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
        };
    }, [classPrefix, className]);
