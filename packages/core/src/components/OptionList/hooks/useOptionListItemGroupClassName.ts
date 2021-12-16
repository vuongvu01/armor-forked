import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

export const useOptionListItemGroupClassName = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(
        () => ({
            Root: appendClassName(makeBEM(classPrefix, 'Root'), className),
            Checkbox: makeBEM(classPrefix, 'Checkbox'),
            Typography: makeBEM(classPrefix, 'Typography'),
        }),
        [classPrefix, className],
    );
