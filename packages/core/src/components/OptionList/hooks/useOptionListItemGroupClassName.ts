import { useMemo } from 'react';
import { appendClassName, makeBEM } from '@deliveryhero/armor-system';

export const useOptionListItemGroupClassName = (
    classPrefix: string,
    className?: string,
    disabled?: boolean,
) =>
    useMemo(
        () => ({
            Root: appendClassName(makeBEM(classPrefix, 'Root'), className),
            Checkbox: makeBEM(classPrefix, 'Checkbox'),
            Typography: makeBEM(classPrefix, 'Typography'),
        }),
        [classPrefix, className, disabled],
    );
