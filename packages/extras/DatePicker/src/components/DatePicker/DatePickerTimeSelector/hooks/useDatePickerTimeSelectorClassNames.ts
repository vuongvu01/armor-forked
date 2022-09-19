import { useMemo } from 'react';
import { makeRootClassName, makeBEM } from '@deliveryhero/armor-system';

export const useDatePickerTimeSelectorClassNames = (
    classPrefix: string,
    className?: string,
) =>
    useMemo(() => {
        return {
            Root: makeRootClassName(classPrefix, className),
            Clock: makeBEM(classPrefix, 'Clock'),
            InputHours: `${makeBEM(classPrefix, 'Input')} ${makeBEM(
                classPrefix,
                'InputHours',
            )}`,
            InputMinutes: `${makeBEM(classPrefix, 'Input')} ${makeBEM(
                classPrefix,
                'InputMinutes',
            )}`,
            TimeSeparatorIcon: makeBEM(classPrefix, 'TimeSeparatorIcon'),
            DayPeriodSelector: makeBEM(classPrefix, 'DayPeriodSelector'),
        };
    }, [classPrefix, className]);
