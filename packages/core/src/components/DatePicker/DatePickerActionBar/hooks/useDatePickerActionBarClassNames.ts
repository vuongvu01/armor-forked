import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useDatePickerActionBarClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            ActionBarButton: makeBEM(classPrefix, 'ActionBarButton'),
            Actions: makeBEM(classPrefix, 'Actions'),
        };
    }, [classPrefix, className]);
