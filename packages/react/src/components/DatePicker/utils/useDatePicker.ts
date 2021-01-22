import { useCallback, useMemo, useRef, useState } from 'react';
import { DatePickerPropsType } from '../type';
import { ReferenceType } from '../../../type';
import { getDayMatrix } from '../DatePickerDaySelector/utils/getDayMatrix';
import { useDatePickerDaySelectorWeekDays } from '../DatePickerDaySelector/utils/useDatePickerDaySelectorWeekDays';
import { useDatePickerPopper } from './useDatePickerPopper';

export const useDatePicker = (
    { ...restProps }: DatePickerPropsType,
    ref: ReferenceType,
) => {
    const {
        dropdownRef,
        triggerRef,
        setArrowRef,
        styles,
        attributes,
    } = useDatePickerPopper();

    const [monthYearSelectorOpen, setMonthYearSelectorOpen] = useState(false);

    return {
        rootProps: {
            ...restProps,
            ref,
        },
        inputProps: {
            readOnly: true,
            label: 'Select date',
            ref: triggerRef,
            value: '04/07/2020 - 01/01/2021',
            enableRootRef: true,
        },
        dropdownProps: {
            ref: dropdownRef,
            style: styles.popper,
            ...attributes.popper,
        },
        arrowProps: {
            ref: setArrowRef as any,
            style: styles.arrow,
        },
        topBarProps: {
            monthYearSelectorOpen,
        },

        daySelectorProps: {
            currentDateUTC: new Date(),
            displayedDateUTC: new Date(),
        },

        displayMonthYearSelector: false,
    };
};
