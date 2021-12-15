import { useMemo } from 'react';
import { useControlledState } from '@deliveryhero/armor-system';

import { DateRangePickerPropsType } from '../type';
import { DateValueRangeType, DateValueType } from '../../type';
import { RefType } from '../../../../type';
import { useDateRangePickerSelectionEvents } from './useDateRangePickerSelectionEvents';
import { useCommonDatePickerPanel } from '../../hooks/useCommonDatePickerPanel';
import { useCommonDatePickerState } from '../../hooks/useCommonDatePickerState';
import { useCommonDatePickerCallbacks } from '../../hooks/useCommonDatePickerCallbacks';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { externalizeValue } from '../utils/externalizeValue';
import { useDateRangePickerFormattedValue } from './useDateRangePickerFormattedValue';
import { useCommonDatePickerInputProps } from '../../hooks/useCommonDatePickerInputProps';
import { useCommonDatePickerAllowedDates } from '../../hooks/useCommonDatePickerAllowedDates';
import { useCommonDatePickerActionButtons } from '../../hooks/useCommonDatePickerActionButtons';
import { useCommonDatePickerCompatibility } from '../../hooks/useCommonDatePickerCompatibility';

export const useDateRangePicker = <E extends HTMLDivElement>(
    props: DateRangePickerPropsType,
    ref: RefType<E>,
) => {
    const {
        defaultDateValue,
        dateValue,
        onDateValueChange,
        enableTimePicker,
        formatDateTimeRange,
    } = props;

    // controlled and uncontrolled state: dateValue, defaultDateValue and onDateValueChange mapped to internalValue
    const [externalValue, setExternalValue] = useControlledState<
        DateRangePickerPropsType['dateValue']
    >(defaultDateValue, dateValue, onDateValueChange);

    // internalValue as an object (former internalValueUTC)
    const internalValue = useMemo<DateVectorRange>(
        () => DateVectorRange.createFromLocalDateRange(externalValue),
        [externalValue],
    );

    const { enableApplyButton } = useCommonDatePickerCompatibility(props);

    const {
        rootRef,
        inputRef,
        dropdownOpen,
        toggleDropdown,
        closeDropdown,
        arrowProps,
        dropdownProps,
        portalProps,
        panelId,
    } = useCommonDatePickerPanel<DateValueRangeType, E>({ ref }, props);

    const {
        dirtyInternalValueVector,
        setDirtyInternalValueVector,
        timeSelectorValue,
        setTimeSelectorValue,
        displayedDateVector,
        setDisplayedDateVector,
        currentDateVector,
        monthYearSelectorOpen,
        onMonthYearSelectorToggle,
    } = useCommonDatePickerState<DateValueRangeType>(
        { dropdownOpen, internalValue },
        props,
    );

    const {
        isDateAllowed,
        isDateFree,
        isDateSelectable,
    } = useCommonDatePickerAllowedDates<DateValueType>(
        { dropdownOpen, currentDateVector },
        props,
    );

    const {
        onDateTimeChange,
        onTimeSelectorValueChange,
        applyValue,
        clearValue,
    } = useCommonDatePickerCallbacks<DateValueRangeType>(
        {
            setDirtyInternalValueVector,
            setExternalValue,
            timeSelectorValue,
            setTimeSelectorValue,
            dirtyInternalValueVector,
            externalizeValue,
            enableApplyButton,
        },
        props,
    );

    const {
        showActions,
        actionBarProps,
        enableCloseOnSelect,
    } = useCommonDatePickerActionButtons(
        { applyValue, clearValue, closeDropdown, enableApplyButton },
        props,
    );

    const selectionEventProps = useDateRangePickerSelectionEvents(
        {
            panelId,
            onChange: onDateTimeChange,
            isDateSelectable,
            enableCloseOnSelect,
            closeDropdown,
        },
        props,
    );

    const formattedValue = useDateRangePickerFormattedValue(
        {
            internalValue,
            formatDateTimeRange,
        },
        props,
    );

    const { inputProperties, inactive } = useCommonDatePickerInputProps(
        {},
        props,
    );

    return {
        rootProps: {
            ...props,
            enableTimePicker,
            ref: rootRef,
        },
        inputProps: {
            ...inputProperties,
            ref: inputRef,
            value: formattedValue,
            onRootClick: inactive ? undefined : toggleDropdown,
        },
        portalProps,
        dropdownProps,
        arrowProps,
        topBarProps: {
            displayedDateVector, // to show the currently displayed year and month
            onDisplayedDateVectorChange: setDisplayedDateVector, // to shit months back and forward
            monthYearSelectorOpen,
            onMonthYearToggleClick: onMonthYearSelectorToggle,
        },
        daySelectorProps: {
            displayedDateVector, // to indicate the currently displayed year and month
            dirtyInternalValueVector, // to indicate the selected day
            currentDateVector, // to indicate the current day in the matrix
            isDateAllowed,
            isDateFree,
            ...selectionEventProps,
        },
        monthYearSelectorProps: {
            displayedDateVector, // to indicate the currently displayed year and month
            onDisplayedDateVectorChange: setDisplayedDateVector, // to change the currently displayed year and month

            toggleMonthYearSelector: onMonthYearSelectorToggle,
        },
        timeSelectorProps: {
            value: timeSelectorValue,
            onChange: onTimeSelectorValueChange,
        },

        displayMonthYearSelector: monthYearSelectorOpen,
        open: dropdownOpen,

        showTimePicker: !!enableTimePicker,

        showActions,
        actionBarProps,
    };
};
