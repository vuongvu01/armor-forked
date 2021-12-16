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
    isDateFree: DatePickerDaySelectorPropsType['isDateFree'],
) =>
    useMemo(() => {
        const { dateStart, dateEnd } = dirtyInternalValueVector;

        let selectionStartDate = dateStart;
        let selectionEndDate = dateEnd;
        if (selectionStartCandidate) {
            selectionStartDate = selectionStartCandidate;

            if (selectionEndCandidate) {
                selectionEndDate = selectionEndCandidate;

                if (selectionEndDate.isSmallerThanOrEqual(selectionStartDate)) {
                    const cup = selectionStartDate;
                    selectionStartDate = selectionEndDate;
                    selectionEndDate = cup;
                }
            } else {
                selectionEndDate = null;
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
            const free = isDateFree(date);

            return {
                ...item,
                buttonProps: {
                    selected,
                    allowed,
                    free,
                    leftEnd,
                    rightEnd,
                    current,
                    displayedMonth,
                },
                paddingProps: {
                    selected,
                    allowed,
                    free,
                    leftEnd,
                    rightEnd,
                    current,
                    displayedMonth,
                },
            };
        });
    }, [
        dirtyInternalValueVector,
        selectionStartCandidate,
        calendar,
        selectionEndCandidate,
        isDateAllowed,
        isDateFree,
    ]);
