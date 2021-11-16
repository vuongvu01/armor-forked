import { useMemo } from 'react';

import {
    DatePickerEffectiveCommonPropsType,
    DatePickerEffectiveGenericPropsType,
} from '../type';
import { DateVector } from '../utils/DateVector';
import { DateVectorRange } from '../utils/DateVectorRange';

type UseDatePickerAllowedDatesArgumentsType = {
    reallyOpen: boolean;
    currentDateVector: DateVector;
};
type InternalDateRangeType = DateVectorRange[];

export const useDatePickerAllowedDates = <V>(
    { reallyOpen, currentDateVector }: UseDatePickerAllowedDatesArgumentsType,
    {
        allowedDateRanges,
    }: DatePickerEffectiveGenericPropsType<V> &
        DatePickerEffectiveCommonPropsType,
) => {
    const isDateAllowed = useMemo(() => {
        let ranges: InternalDateRangeType = [];
        const noRestrictions = allowedDateRanges === undefined;

        if (reallyOpen && allowedDateRanges) {
            for (let i = 0; i < allowedDateRanges.length; i += 1) {
                const range = allowedDateRanges[i];
                const [left, right] = range;

                // everything is allowed
                if (left === null && right === null) {
                    ranges = [new DateVectorRange()];
                    break;
                }

                const dateRange = DateVectorRange.createFromLocalDateAdvancedRange(
                    range,
                    currentDateVector,
                );

                if (!dateRange.isIllegal()) {
                    ranges.push(dateRange);
                }
            }
        }

        return (date: DateVector) => {
            if (noRestrictions) {
                return true;
            }

            for (let i = 0; i < ranges.length; i += 1) {
                const range = ranges[i];
                if (range.contains(date)) {
                    return true;
                }
            }

            return false;
        };
    }, [reallyOpen, currentDateVector, allowedDateRanges]);

    return {
        isDateAllowed,
    };
};
