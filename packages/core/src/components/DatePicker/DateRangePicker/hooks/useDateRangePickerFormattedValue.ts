import { useMemo } from 'react';

import { formatDateTimeVector } from '../../utils/formatDateTimeVector';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { DatePickerEffectiveCommonPropsType } from '../../type';
import { DateRangePickerPropsType } from '../type';

type UseFormattedValueProps = {
    internalValue: DateVectorRange;
} & Pick<DateRangePickerPropsType, 'formatDateTimeRange'>;

export const useDateRangePickerFormattedValue = (
    { internalValue, formatDateTimeRange }: UseFormattedValueProps,
    { enableTimePicker, formatDateTime }: DatePickerEffectiveCommonPropsType,
) =>
    useMemo(() => {
        if (internalValue.isInfinite()) {
            return '';
        }

        const dateStartFormatted = formatDateTime
            ? formatDateTime(internalValue.dateStart!.convertToLocalDate())
            : formatDateTimeVector(internalValue.dateStart, enableTimePicker);

        if (internalValue.isFlat()) {
            return dateStartFormatted;
        }

        const dateEndFormatted = formatDateTime
            ? formatDateTime(internalValue.dateEnd!.convertToLocalDate())
            : formatDateTimeVector(internalValue.dateEnd, enableTimePicker);

        return formatDateTimeRange
            ? formatDateTimeRange(dateStartFormatted, dateEndFormatted)
            : `${dateStartFormatted} - ${dateEndFormatted}`;
    }, [internalValue, enableTimePicker, formatDateTime, formatDateTimeRange]);
