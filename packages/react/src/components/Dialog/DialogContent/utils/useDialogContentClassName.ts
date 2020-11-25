import { useMemo } from 'react';

import { makeRootClassName } from '../../../../utils';

export const useDialogContentClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => makeRootClassName(classPrefix, className), [
        classPrefix,
        className,
    ]);
