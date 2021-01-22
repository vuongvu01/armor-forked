import { useMemo } from 'react';
import { DatePickerDaySelectorPropsType } from '../type';
import { useDatePickerDaySelectorWeekDays } from './useDatePickerDaySelectorWeekDays';
import { getDayMatrix } from './getDayMatrix';
import { useCalendar } from './useCalendar';
import { ReferenceType } from '../../../../type';

export const useDatePickerDaySelector = (
    {
        currentDateUTC,
        displayedDateUTC,
        ...restProps
    }: DatePickerDaySelectorPropsType,
    ref: ReferenceType,
) => {
    // put all your component logic here

    const weekDays = useDatePickerDaySelectorWeekDays();

    const calendar = useCalendar(displayedDateUTC, currentDateUTC);
    const dayMatrix = useMemo(() => getDayMatrix([new Date()], new Date()), []);

    return {
        rootProps: {
            ...restProps,
            ref,
        },

        weekDays,
        dayMatrix,
    };
};
