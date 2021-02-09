import { DateVector } from '../../utils/DateVector';
import { DATE_PICKER_DAY_SELECTOR_WEEK_DAYS } from '../constants';

export const makeCalendarItem = (
    dateVector: DateVector,
    currentTimeStamp: number,
    displayedMonth: number,
) => {
    const dateWithoutTime = dateVector.clone();
    dateWithoutTime.resetTime();

    const { year, month, day, weekDay } = dateVector;

    return {
        id: `${month}_${day}`,
        year,
        month,
        day,
        hour: 0,
        minute: 0,
        weekDay: DATE_PICKER_DAY_SELECTOR_WEEK_DAYS[weekDay].value,
        current: dateWithoutTime.timeStamp === currentTimeStamp,
        displayedMonth: month === displayedMonth,
    };
};
