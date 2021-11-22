import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useDatePickerClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Input: makeBEM(classPrefix, 'Input'),
            Dropdown: makeBEM(classPrefix, 'Dropdown'),
        };
    }, [classPrefix, className]);
