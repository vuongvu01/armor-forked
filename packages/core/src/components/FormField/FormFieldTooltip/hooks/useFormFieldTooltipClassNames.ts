import { useMemo } from 'react';
import { makeBEM, makeRootClassName } from '@deliveryhero/armor-system';

export const useFormFieldTooltipClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Indicator: makeBEM(classPrefix, 'Indicator'),
        };
    }, [classPrefix, className]);
