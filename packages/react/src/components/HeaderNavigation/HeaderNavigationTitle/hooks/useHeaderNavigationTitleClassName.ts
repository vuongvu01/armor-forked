import { useMemo } from 'react';

import { makeRootClassName } from '../../../../utils';

export const useHeaderNavigationTitleClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
        };
    }, [classPrefix, className]);