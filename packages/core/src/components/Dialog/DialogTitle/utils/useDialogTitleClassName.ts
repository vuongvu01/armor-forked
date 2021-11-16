import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

export const useDialogTitleClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Text: makeBEM(classPrefix, 'Text'),
            Description: makeBEM(classPrefix, 'Description'),
        };
    }, [classPrefix, className]);
