import { useMemo } from 'react';

import { makeBEM, makeRootClassName } from '../../../utils';

export const useCloseButtonClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Icon: makeBEM(classPrefix, 'Icon'),
        };
    }, [classPrefix, className]);
