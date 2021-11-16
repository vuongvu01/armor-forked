import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

export const useFormFieldMessageClassNames = (
    classPrefix: string,
    className?: string,
    error?: boolean,
) =>
    useMemo(() => {
        const rootClassNames = makeRootClassName(classPrefix, className);
        const rootStateClassNames: string[] = [];
        if (error) {
            rootStateClassNames.push(makeBEM(classPrefix, 'Root', 'error'));
        }

        return {
            Root: `${rootClassNames} ${rootStateClassNames.join(' ')}`.trim(),
        };
    }, [classPrefix, className, error]);
