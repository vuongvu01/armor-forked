import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../utils';

export const useContextMenuClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Arrow: makeBEM(classPrefix, 'Arrow'),
        };
    }, [classPrefix, className]);
