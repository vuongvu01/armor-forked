import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

export const useDialogContentClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => makeRootClassName(classPrefix, className), [
        classPrefix,
        className,
    ]);
