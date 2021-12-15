import { useMemo } from 'react';
import { formatDateTimeVector } from '../../utils/formatDateTimeVector';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { DatePickerEffectiveCommonPropsType } from '../../type';

type UseDatePickerFormattedValueProps = {
    internalValue: DateVectorRange;
};

export const useDatePickerFormattedValue = (
    { internalValue }: UseDatePickerFormattedValueProps,
    { enableTimePicker, formatDateTime }: DatePickerEffectiveCommonPropsType,
) =>
    useMemo(() => {
        if (internalValue.isInfinite()) {
            return '';
        }

        const { dateStart } = internalValue;

        if (formatDateTime && dateStart) {
            return formatDateTime(dateStart.convertToLocalDate());
        }

        return formatDateTimeVector(dateStart, enableTimePicker);
    }, [internalValue, enableTimePicker, formatDateTime]);
