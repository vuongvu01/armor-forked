import { useEffect, useState } from 'react';
import { useRifm } from 'rifm';

import { DatePickerPropsType } from '../type';
import { DateVector } from '../../utils/DateVector';
import {
    DATEPICKER_DATE_MASK_TIME_LENGTH,
    DATEPICKER_DATE_MASK_DEFAULT_LENGTH,
    DATEPICKER_DATE_MASK_ACCEPTED_INPUT,
} from '../../constants';
import { getDatePartsFromString } from '../../utils/getDatePartsFromString';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { TimeVector24 } from '../../utils/TimeVector24';
import { TimeVector12, TimeVector12ModeType } from '../../utils/TimeVector12';
import { formatDateTimeMask } from '../utils/formatDateTimeMask';
import { getDateTimeMask } from '../utils/getDateTimeMask';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';

type UseDatePickerMaskedInputProps = {
    formattedValue: string;
    inactive?: boolean;
    toggleDropdown: () => void;
    setDisplayedDateVector: (newValue: DateVector) => void;
    onDateTimeChange: (newValue: DateVectorRange) => void;
    enableTimePicker?: boolean;
    isDateSelectable: (date: DateVector) => boolean;
    onTimeSelectorValueChange: (newTimeSelectorValue: TimeVector24) => void;
    dropdownOpen: boolean;
};

export const useDatePickerMaskedInput = (
    {
        formattedValue,
        inactive,
        toggleDropdown,
        setDisplayedDateVector,
        onDateTimeChange,
        enableTimePicker,
        isDateSelectable,
        onTimeSelectorValueChange,
        dropdownOpen,
    }: UseDatePickerMaskedInputProps,
    props: DatePickerPropsType,
) => {
    const { inputMaskEnabled, formatDateTime } = props;

    const [inputMaskValue, setInputMaskValue] = useState<string>('');

    const showMaskedInput = inputMaskEnabled && !formatDateTime;

    const { value, onChange } = useRifm({
        value: inputMaskValue,
        onChange: setInputMaskValue,
        format: (val: string) => formatDateTimeMask(val, !!enableTimePicker),
        replace: (val: string) => getDateTimeMask(val, !!enableTimePicker),
        accept: DATEPICKER_DATE_MASK_ACCEPTED_INPUT,
    });

    useDidUpdateEffect(() => {
        if (inputMaskValue !== '' && !showMaskedInput) {
            return;
        }
        const date = getDatePartsFromString(inputMaskValue, enableTimePicker);
        const maxLength = enableTimePicker
            ? DATEPICKER_DATE_MASK_TIME_LENGTH
            : DATEPICKER_DATE_MASK_DEFAULT_LENGTH;
        if (!date) {
            return;
        }
        const { day, month, year, hour, minute, mode, formattedString } = date;
        const inputMaskDateVector = DateVector.createFromStructure({
            year,
            month,
            day,
        });
        const isDateUpdatable =
            isDateSelectable(inputMaskDateVector) &&
            formattedString &&
            formattedString.length === maxLength;
        if (isDateUpdatable) {
            const dateObj: Partial<{ hour: number; minute: number }> = {};
            if (enableTimePicker) {
                const newTimeVector12 = new TimeVector12(
                    hour,
                    minute,
                    mode as TimeVector12ModeType,
                );
                const timeSelectorValue = newTimeVector12.convertTo24();
                dateObj.hour = timeSelectorValue.hour;
                dateObj.minute = timeSelectorValue.minute;
                onTimeSelectorValueChange(timeSelectorValue);
            }

            const clonedDateRange = inputMaskDateVector.clone(dateObj);
            const newVector = new DateVectorRange(
                clonedDateRange,
                clonedDateRange,
            );

            if (newVector.dateStart) {
                setDisplayedDateVector(newVector.dateStart);
                onDateTimeChange(newVector);
            }
        }
    }, [inputMaskValue, showMaskedInput]);

    useEffect(() => {
        if (!showMaskedInput && !formattedValue) {
            return;
        }
        const date = getDatePartsFromString(formattedValue, enableTimePicker);
        const maxLength = enableTimePicker
            ? DATEPICKER_DATE_MASK_TIME_LENGTH
            : DATEPICKER_DATE_MASK_DEFAULT_LENGTH;
        if (
            date?.formattedString &&
            date?.formattedString.length === maxLength
        ) {
            const { formattedString } = date;
            setInputMaskValue(formattedString);
        }
    }, [formattedValue, showMaskedInput, enableTimePicker]);

    return {
        onFocus: () => {
            if (!inactive && !dropdownOpen) {
                toggleDropdown();
            }
        },
        value,
        onChange,
        showMaskedInput,
    };
};
