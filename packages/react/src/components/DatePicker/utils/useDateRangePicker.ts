import { useEffect } from 'react';
import { DateRangePickerPropsType, DateValueRangeType } from '../type';
import { ReferenceType } from '../../../type';
import { useDatePickerPopper } from './useDatePickerPopper';
import { useFlagState } from '../../../system/hooks/useFlagState';
import { useControlledState } from '../../../system/hooks/useControlledState';
import { convertLocalDateToUTC } from './date';

export const useDateRangePicker = (
    { dateValue, defaultDateValue, ...restProps }: DateRangePickerPropsType,
    ref: ReferenceType,
) => {
    const {
        dropdownRef,
        triggerRef,
        setArrowRef,
        styles,
        attributes,
    } = useDatePickerPopper();

    const [monthYearSelectorOpen, onMonthYearSelectorToggle] = useFlagState();
    const [internalValue, setInternalValue] = useControlledState<
        DateValueRangeType
    >(defaultDateValue, dateValue);

    const currentDate = new Date(); // the date we have now locally
    const currentDateUTC = convertLocalDateToUTC(currentDate);

    // the date today we display
    const displayedDate =
        internalValue && internalValue[0] ? internalValue[0] : currentDate;
    const displayedDateUTC = convertLocalDateToUTC(displayedDate);

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
            onMonthYearToggleClick: onMonthYearSelectorToggle,
        },

        daySelectorProps: {
            currentDateUTC,
            displayedDateUTC,
        },

        displayMonthYearSelector: monthYearSelectorOpen,
    };
};
