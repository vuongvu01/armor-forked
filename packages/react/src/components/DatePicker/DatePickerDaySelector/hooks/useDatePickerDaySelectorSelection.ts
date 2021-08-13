import { useMemo } from 'react';
import {
    DatePickerDaySelectorPropsType,
    DatePickerDaySelectorRangeItemType,
} from '../type';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { DateVector } from '../../utils/DateVector';

export const useDatePickerDaySelectorSelection = (
    calendar: DatePickerDaySelectorRangeItemType[],
    dirtyInternalValueVector: DateVectorRange,
    selectionStartCandidate: DateVector | null,
    selectionEndCandidate: DateVector | null,
    isDateAllowed: DatePickerDaySelectorPropsType['isDateAllowed'],
) =>
    useMemo(() => {
        const { dateStart, dateEnd } = dirtyInternalValueVector;

        let selectionStartDate = dateStart;
        let selectionEndDate = dateEnd;
        if (selectionStartCandidate && selectionEndCandidate) {
            selectionStartDate = selectionStartCandidate;
            selectionEndDate = selectionEndCandidate;

            if (selectionEndDate.isSmallerThanOrEqual(selectionStartDate)) {
                const cup = selectionStartDate;
                selectionStartDate = selectionEndDate;
                selectionEndDate = cup;
            }
        }

        return calendar.map(item => {
            const vector = DateVector.createFromStructure(item);
            const leftEnd = vector.isEqualTo(selectionStartDate);
            const rightEnd = vector.isEqualTo(selectionEndDate);

            const selected =
                vector.isGreaterThanOrEqual(selectionStartDate) &&
                vector.isSmallerThanOrEqual(selectionEndDate);

            const { date, displayedMonth, current } = item;

            const allowed = isDateAllowed(date);

            return {
                ...item,
                buttonProps: {
                    selected,
                    allowed,
                    leftEnd,
                    rightEnd,
                    current,
                    displayedMonth,
                },
                paddingProps: {
                    selected,
                    allowed,
                    leftEnd,
                    rightEnd,
                    current,
                    displayedMonth,
                },
            };
        });
    }, [
        calendar,
        dirtyInternalValueVector,
        selectionStartCandidate,
        selectionEndCandidate,
        isDateAllowed,
    ]);
