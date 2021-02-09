import { useMemo } from 'react';
import { DatePickerDaySelectorRangeItemType } from '../type';
import { DateVector } from '../../utils/DateVector';
import { makeCalendarItem } from '../utils/makeCalendarItem';

export const useDatePickerDaySelectorCalendar = (
    displayedDateVector: DateVector,
    currentDateVector: DateVector,
) =>
    useMemo(() => {
        const displayedMonth = displayedDateVector.month;
        const displayedDay = displayedDateVector.day;

        const dateWithoutTime = currentDateVector.clone();
        dateWithoutTime.resetTime();
        const currentTime = dateWithoutTime.timeStamp;

        const range: DatePickerDaySelectorRangeItemType[] = [];

        // generate backward
        let nextDate = displayedDateVector.clone();
        let lastWeekDay = 0;
        while (nextDate.month === displayedMonth) {
            range.unshift(
                makeCalendarItem(nextDate, currentTime, displayedMonth),
            );
            lastWeekDay = nextDate.weekDay;

            nextDate.addDay(-1);
        }

        if (lastWeekDay > 0) {
            for (let i = lastWeekDay - 1; i >= 0; i -= 1) {
                range.unshift(
                    makeCalendarItem(nextDate, currentTime, displayedMonth),
                );

                nextDate.addDay(-1);
            }
        }

        // generate forward
        nextDate = displayedDateVector.clone();
        lastWeekDay = 0;
        while (nextDate.month === displayedMonth) {
            const nextDay = nextDate.day;
            if (nextDay !== displayedDay) {
                range.push(
                    makeCalendarItem(nextDate, currentTime, displayedMonth),
                );
            }
            lastWeekDay = nextDate.weekDay;

            nextDate.addDay(1);
        }

        if (lastWeekDay < 6) {
            for (let i = lastWeekDay + 1; i <= 6; i += 1) {
                range.push(
                    makeCalendarItem(nextDate, currentTime, displayedMonth),
                );

                nextDate.addDay(1);
            }
        }

        return range;
    }, [displayedDateVector, currentDateVector]);
