import {
    addDaysToUTCDate,
    cloneUTCDate,
    stripDateTime,
} from '../../utils/date';
import { weekDayMap } from '../constants';

type RangeItemType = {
    month: number;
    day: number;
    weekDay: string;
    current: boolean;
    displayedMonth: boolean;
};

const makeItem = (date: Date, currentTime: number, displayedMonth: number) => {
    const dateWithoutTime = stripDateTime(date);
    const month = date.getUTCMonth();

    return {
        month,
        day: date.getUTCDate(),
        weekDay: weekDayMap[date.getUTCDay()],
        current: dateWithoutTime.getTime() === currentTime,
        displayedMonth: month === displayedMonth,
    };
};

export const useCalendar = (displayedDateUTC: Date, currentDateUTC: Date) => {
    const displayedMonth = displayedDateUTC.getUTCMonth();
    const displayedDay = displayedDateUTC.getUTCDate();

    const currentTime = stripDateTime(currentDateUTC).getTime();

    const range: RangeItemType[] = [];

    // generate backward
    let nextDate = cloneUTCDate(displayedDateUTC);
    let lastWeekDay = 0;
    while (nextDate.getUTCMonth() === displayedMonth) {
        range.unshift(makeItem(nextDate, currentTime, displayedMonth));
        lastWeekDay = nextDate.getUTCDay();

        nextDate = addDaysToUTCDate(nextDate, -1);
    }

    if (lastWeekDay > 0) {
        for (let i = lastWeekDay - 1; i >= 0; i -= 1) {
            range.unshift(makeItem(nextDate, currentTime, displayedMonth));
            nextDate = addDaysToUTCDate(nextDate, -1);
        }
    }

    // generate forward
    nextDate = cloneUTCDate(displayedDateUTC);
    lastWeekDay = 0;
    while (nextDate.getUTCMonth() === displayedMonth) {
        const nextDay = nextDate.getUTCDate();
        if (nextDay !== displayedDay) {
            range.push(makeItem(nextDate, currentTime, displayedMonth));
        }
        lastWeekDay = nextDate.getUTCDay();

        nextDate = addDaysToUTCDate(nextDate, 1);
    }

    if (lastWeekDay < 6) {
        for (let i = lastWeekDay + 1; i <= 6; i += 1) {
            range.push(makeItem(nextDate, currentTime, displayedMonth));
            nextDate = addDaysToUTCDate(nextDate, 1);
        }
    }

    // split by weeks
    const result: RangeItemType[][] = [];
    let week: RangeItemType[] = [];
    for (let i = 0; i < range.length; i += 1) {
        week.push(range[i]);
        if (week.length === 7) {
            result.push(week);
            week = [];
        }
    }

    if (week.length) {
        result.push(week);
    }

    return result;
};
