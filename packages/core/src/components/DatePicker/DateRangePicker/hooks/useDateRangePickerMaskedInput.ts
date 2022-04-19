import { useEffect, useState } from 'react';
import { useRifm } from 'rifm';

import { DateRangePickerPropsType } from '../type';
import { DateVector } from '../../utils/DateVector';
import { getDatePartsFromString } from '../../utils/getDatePartsFromString';
import { DATERANGEPICKER_DATE_MASK_ACCEPTED_INPUT } from '../constants';
import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { formatDateTimeMask } from '../utils/formatDateTimeMask';
import { getDateTimeMask } from '../utils/getDateTimeMask';

type UseDateRangePickerMaskedInputProps = {
    formattedValue: string;
    inactive?: boolean;
    toggleDropdown: () => void;
    setDisplayedDateVector: (newValue: DateVector) => void;
    onDateTimeChange: (newValue: DateVectorRange) => void;
    isDateSelectable: (date: DateVector) => boolean;
    dropdownOpen: boolean;
};

export const useDateRangePickerMaskedInput = (
    {
        formattedValue,
        inactive,
        toggleDropdown,
        setDisplayedDateVector,
        onDateTimeChange,
        isDateSelectable,
        dropdownOpen,
    }: UseDateRangePickerMaskedInputProps,
    props: DateRangePickerPropsType,
) => {
    const { inputMaskEnabled, formatDateTime } = props;

    const [inputMaskValue, setInputMaskValue] = useState<string>('');

    const showMaskedInput = inputMaskEnabled && !formatDateTime;

    const { value, onChange } = useRifm({
        value: inputMaskValue,
        onChange: setInputMaskValue,
        format: formatDateTimeMask,
        replace: getDateTimeMask,
        accept: DATERANGEPICKER_DATE_MASK_ACCEPTED_INPUT,
    });

    useDidUpdateEffect(() => {
        if (inputMaskValue !== '' && !showMaskedInput) {
            return;
        }
        const [dateStart, dateEnd] = inputMaskValue.split('-');
        if (!dateStart || !dateEnd) {
            return;
        }
        const dateStartParts = getDatePartsFromString(dateStart);
        const dateEndParts = getDatePartsFromString(dateEnd);
        if (!dateStartParts || !dateEndParts) {
            return;
        }
        const {
            day: dayStart,
            month: monthStart,
            year: yearStart,
        } = dateStartParts;

        const { day: dayEnd, month: monthEnd, year: yearEnd } = dateEndParts;

        const inputMaskStartDateVector = DateVector.createFromStructure({
            year: yearStart,
            month: monthStart,
            day: dayStart,
        });
        const inputMaskEndDateVector = DateVector.createFromStructure({
            year: yearEnd,
            month: monthEnd,
            day: dayEnd,
        });

        const newVector = new DateVectorRange(
            inputMaskStartDateVector.clone(),
            inputMaskEndDateVector.clone(),
        );
        const isDateUpdatable =
            isDateSelectable(inputMaskStartDateVector) &&
            isDateSelectable(inputMaskEndDateVector) &&
            !inputMaskStartDateVector.isEqualTo(inputMaskEndDateVector);
        onDateTimeChange(newVector);
        if (newVector.dateStart && isDateUpdatable) {
            setDisplayedDateVector(newVector.dateStart);
        }
    }, [inputMaskValue, showMaskedInput]);

    useEffect(() => {
        if (showMaskedInput) {
            setInputMaskValue(formattedValue);
        }
    }, [formattedValue, showMaskedInput]);

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
