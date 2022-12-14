import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

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
            DayPaddingLeft: makeBEM(classPrefix, 'DayPaddingLeft'),
            DayPaddingRight: makeBEM(classPrefix, 'DayPaddingRight'),
            DayButton: makeBEM(classPrefix, 'DayButton'),
        };
    }, [classPrefix, className]);
