import { useMemo } from 'react';
import { formatDateTimeVector } from '../../utils/formatDateTimeVector';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { DatePickerPropsType } from '../type';

type UseFormattedValueProps = { internalValue: DateVectorRange } & Pick<
    DatePickerPropsType,
    'enableTimePicker' | 'formatDateTime'
>;

export const useFormattedValue = ({
    internalValue,
    enableTimePicker,
    formatDateTime,
}: UseFormattedValueProps) =>
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
