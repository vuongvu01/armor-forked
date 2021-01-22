type DayMatrixItemType = {
    id: string;
    number: number;
    selected: boolean;
    leftEnd: boolean;
    rightEnd: boolean;
    current: boolean;
};

type SelectedDateRange = Date[];

export const getDayMatrix = (
    selectedRange: SelectedDateRange,
    currentDate: Date,
) => {
    const monthNumber = 10;
    const tmpDayStart = 10;
    const tmpDayEnd = 17;
    const tmpCurrentDay = 5;

    const month: DayMatrixItemType[] = [];
    for (let dayNumber = 0; dayNumber < 30; dayNumber += 1) {
        month.push({
            id: `${dayNumber}.${monthNumber}`,
            number: dayNumber,

            current: dayNumber === tmpCurrentDay,

            selected:
                (dayNumber >= tmpDayStart && dayNumber <= tmpDayEnd) ||
                dayNumber === 23,
            leftEnd: dayNumber === tmpDayStart || dayNumber === 23,
            rightEnd: dayNumber === tmpDayEnd || dayNumber === 23,
        });
    }

    return month;
};
