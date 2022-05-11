import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useDatePickerMonthYearSelectorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Scroll: makeBEM(classPrefix, 'Scroll'),
            List: makeBEM(classPrefix, 'List'),
            Year: makeBEM(classPrefix, 'Year'),
            YearTitle: makeBEM(classPrefix, 'YearTitle'),
            MonthList: makeBEM(classPrefix, 'MonthList'),
            Month: makeBEM(classPrefix, 'Month'),
        };
    }, [classPrefix, className]);
