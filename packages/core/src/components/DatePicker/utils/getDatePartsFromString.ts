import {
    DATEPICKER_DATE_MASK_MATCHER,
    DATEPICKER_TIME_MASK_MATCHER,
} from '../constants';

export type DatePartsFromStringResultType = {
    day: number;
    month: number;
    year: number;
    hour?: number;
    minute?: number;
    mode?: string;
    formattedString?: string;
};

export const getDatePartsFromString = (
    fullDate: string,
    enableTimePicker?: boolean,
): DatePartsFromStringResultType | null => {
    if (!fullDate) {
        return null;
    }

    const dateValue = fullDate.match(DATEPICKER_DATE_MASK_MATCHER) || [];
    const [, day, month, year] = dateValue as string[];

    if (day && month && year) {
        const result: DatePartsFromStringResultType = {
            day: Number(day),
            month: (Number(month) - 1) as number,
            year: Number(year),
        };
        result.formattedString = `${result.day.toString().padStart(2, '0')}.${(
            result.month + 1
        )
            .toString()
            .padStart(2, '0')}.${result.year}`;
        if (enableTimePicker) {
            const timeValue =
                fullDate.match(DATEPICKER_TIME_MASK_MATCHER) || [];
            const [, hour, minute, mode] = timeValue as string[];
            if (hour && minute && mode) {
                result.hour = Number(hour);
                result.minute = Number(minute);
                result.mode = mode;

                result.formattedString = `${result.formattedString} ${hour
                    .toString()
                    .padStart(2, '0')}:${minute
                    .toString()
                    .padStart(2, '0')} ${mode}`;
            }
        }

        return result;
    }

    return null;
};
