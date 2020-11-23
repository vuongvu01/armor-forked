import { useMemo } from 'react';

import { makeBEM, makeRootClassName } from '../../../../utils';

export const useFormFieldTooltipClassNames = (
    classPrefix: string,
    className?: string,
    visible?: boolean,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Indicator: makeBEM(classPrefix, 'Indicator'),
        };
    }, [classPrefix, className, visible]);
