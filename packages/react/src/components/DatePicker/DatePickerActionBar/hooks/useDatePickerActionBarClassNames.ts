import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useDatePickerActionBarClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            ActionBarButton: makeBEM(classPrefix, 'ActionBarButton'),
        };
    }, [classPrefix, className]);
