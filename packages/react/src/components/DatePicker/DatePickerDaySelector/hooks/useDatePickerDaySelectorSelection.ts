import { useMemo } from 'react';
import { DatePickerDaySelectorRangeItemType } from '../type';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { DateVector } from '../../utils/DateVector';

export const useDatePickerDaySelectorSelection = (
    calendar: DatePickerDaySelectorRangeItemType[],
    dirtyInternalValueVector: DateVectorRange,
    selectionStartCandidate: DateVector | null,
    selectionEndCandidate: DateVector | null,
) =>
    useMemo(() => {
        const { dateStart, dateEnd } = dirtyInternalValueVector;

        let selectionStartDate = dateStart;
        let selectionEndDate = dateEnd;
        if (selectionStartCandidate && selectionEndCandidate) {
            selectionStartDate = selectionStartCandidate;
            selectionEndDate = selectionEndCandidate;

            if (selectionEndDate.isSmallerThan(selectionStartDate)) {
                const cup = selectionStartDate;
                selectionStartDate = selectionEndDate;
                selectionEndDate = cup;
            }
        }

        return calendar.map(date => {
            const vector = DateVector.createFromStructure(date);
            const leftEnd = vector.isEqualTo(selectionStartDate);
            const rightEnd = vector.isEqualTo(selectionEndDate);

            const selected =
                vector.isGreaterThan(selectionStartDate) &&
                vector.isSmallerThan(selectionEndDate);

            return {
                ...date,
                itemProps: {
                    'data-day': date.day,
                    'data-month': date.month,
                    'data-year': date.year,
                    'data-displayed-month': date.displayedMonth ? '1' : '0',
                },
                buttonProps: {
                    selected,
                    leftEnd,
                    rightEnd,
                    current: date.current,
                    displayedMonth: date.displayedMonth,
                },
                paddingProps: {
                    selected,
                    leftEnd,
                    rightEnd,
                    current: date.current,
                    displayedMonth: date.displayedMonth,
                },
            };
        });
    }, [
        calendar,
        dirtyInternalValueVector,
        selectionStartCandidate,
        selectionEndCandidate,
    ]);
