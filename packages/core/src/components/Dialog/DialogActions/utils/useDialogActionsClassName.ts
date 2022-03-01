import { useMemo } from 'react';
import { makeRootClassName } from '@deliveryhero/armor-system';

export const useDialogActionsClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(
        () => makeRootClassName(classPrefix, className),
        [classPrefix, className],
    );
