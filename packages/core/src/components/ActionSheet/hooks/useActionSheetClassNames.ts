import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useActionSheetClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            LabelContainer: makeBEM(classPrefix, 'LabelContainer'),
        };
    }, [classPrefix, className]);
