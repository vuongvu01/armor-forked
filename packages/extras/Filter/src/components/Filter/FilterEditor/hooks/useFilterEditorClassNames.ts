import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useFilterEditorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Conditions: makeBEM(classPrefix, 'Conditions'),
            Condition: makeBEM(classPrefix, 'Condition'),
            ResultCount: makeBEM(classPrefix, 'ResultCount'),
            ApplyButton: makeBEM(classPrefix, 'ApplyButton'),
        };
    }, [classPrefix, className]);
