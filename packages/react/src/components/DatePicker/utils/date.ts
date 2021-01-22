export const cloneUTCDate = (date: Date) =>
    new Date(
        Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds(),
        ),
    );

export const convertLocalDateToUTC = (date: Date) =>
    new Date(
        Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),
        ),
    );

// todo: tmp
export const getNextUTCDate = (date: Date) => {
    const nextDate = cloneUTCDate(date);
    nextDate.setUTCDate(date.getUTCDate() + 1);

    return nextDate;

    // const stamp = date.getUTCMilliseconds();
    // const nextStamp = stamp + 86400000;
    // return new Date(nextStamp);
};

export const addDaysToUTCDate = (date: Date, days = 1) => {
    const nextDate = cloneUTCDate(date);
    nextDate.setUTCDate(date.getUTCDate() + days);

    return nextDate;
};

// todo: tmp
export const convertUTCDateToLocal = (date: Date) =>
    new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds(),
    );

// todo: tmp
export const printUTCDate = (date: Date) => {
    const year = date.getUTCFullYear().toString();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date
        .getUTCDate()
        .toString()
        .padStart(2, '0');
    const hour = date
        .getUTCHours()
        .toString()
        .padStart(2, '0');
    const minute = date
        .getUTCMinutes()
        .toString()
        .padStart(2, '0');
    const second = date
        .getUTCSeconds()
        .toString()
        .padStart(2, '0');

    return `${hour}:${minute}:${second} ${day}/${month}/${year}`;
};

export const makeUTCDate = (
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
) => {
    return new Date(Date.UTC(year, month, day, hour, minute, second));
};

export const stripDateTime = (date: Date) => {
    const dateWithoutTime = cloneUTCDate(date);
    dateWithoutTime.setUTCHours(0, 0, 0, 0);

    return dateWithoutTime;
};
