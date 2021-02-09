import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '../../../../utils';

export const useDatePickerDaySelectorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Week: makeBEM(classPrefix, 'Week'),
            WeekDay: makeBEM(classPrefix, 'WeekDay'),
            Days: makeBEM(classPrefix, 'Days'),
            Day: makeBEM(classPrefix, 'Day'),
            DayPadding: makeBEM(classPrefix, 'DayPadding'),
            DayButton: makeBEM(classPrefix, 'DayButton'),
        };
    }, [classPrefix, className]);
