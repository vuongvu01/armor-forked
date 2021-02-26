import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useDatePickerTimeSelectorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Clock: makeBEM(classPrefix, 'Clock'),
            Input: makeBEM(classPrefix, 'Input'),
            Button: makeBEM(classPrefix, 'Button'),
            TimeSeparatorIcon: makeBEM(classPrefix, 'TimeSeparatorIcon'),
            DayPeriodSelector: makeBEM(classPrefix, 'DayPeriodSelector'),
        };
    }, [classPrefix, className]);
