import { useMemo, useCallback } from 'react';

import { DatePickerEffectiveCommonPropsType } from '../type';
import { DateVector } from '../utils/DateVector';
import { DateVectorRange } from '../utils/DateVectorRange';

type UseDatePickerAllowedDatesPropsType = {
    dropdownOpen: boolean;
    currentDateVector: DateVector;
};
type InternalDateRangeType = DateVectorRange[];

export const useCommonDatePickerAllowedDates = <V>(
    { dropdownOpen, currentDateVector }: UseDatePickerAllowedDatesPropsType,
    {
        allowedDateRanges,
        isDateAllowed,
        freeDateRanges,
        isDateFree,
    }: Pick<
        DatePickerEffectiveCommonPropsType,
        'allowedDateRanges' | 'isDateAllowed' | 'freeDateRanges' | 'isDateFree'
    >,
) => {
    const isDateReallyAllowed = useMemo(() => {
        let ranges: InternalDateRangeType = [];
        const noRestrictions = allowedDateRanges === undefined;

        if (dropdownOpen && allowedDateRanges) {
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
            if (noRestrictions && !isDateAllowed) {
                return true;
            }

            if (isDateAllowed?.(date.convertToLocalDate())) {
                return true;
            }

            if (ranges.length) {
                for (let i = 0; i < ranges.length; i += 1) {
                    const range = ranges[i];
                    if (range.contains(date)) {
                        return true;
                    }
                }
            }

            return false;
        };
    }, [dropdownOpen, currentDateVector, allowedDateRanges, isDateAllowed]);

    const isDateReallyFree = useMemo(() => {
        let ranges: InternalDateRangeType = [];
        const noRestrictions = freeDateRanges === undefined;

        if (dropdownOpen && freeDateRanges) {
            for (let i = 0; i < freeDateRanges.length; i += 1) {
                const range = freeDateRanges[i];
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
            if (noRestrictions && !isDateFree) {
                return true;
            }

            if (isDateFree?.(date.convertToLocalDate())) {
                return true;
            }

            if (ranges.length) {
                for (let i = 0; i < ranges.length; i += 1) {
                    const range = ranges[i];
                    if (range.contains(date)) {
                        return true;
                    }
                }
            }

            return false;
        };
    }, [freeDateRanges, dropdownOpen, currentDateVector, isDateFree]);

    const isDateSelectable = useCallback(
        (date: DateVector) => {
            // todo: optimise this: need to combine the internals of both functions to reduce amount of computations
            if (!isDateReallyAllowed(date)) {
                return false;
            }

            if (!isDateReallyFree(date)) {
                return false;
            }

            return true;
        },
        [isDateReallyAllowed, isDateReallyFree],
    );

    return {
        isDateAllowed: isDateReallyAllowed,
        isDateFree: isDateReallyFree,
        isDateSelectable,
    };
};
