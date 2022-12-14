import { useMemo } from 'react';
import { useControlledState } from '@deliveryhero/armor-system';

import { DatePickerPropsType } from '../type';
import { DateValueType } from '../../type';
import { RefType } from '../../../../type';
import { useCommonDatePickerPanel } from '../../hooks/useCommonDatePickerPanel';
import { useCommonDatePickerState } from '../../hooks/useCommonDatePickerState';
import { useCommonDatePickerCallbacks } from '../../hooks/useCommonDatePickerCallbacks';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { useDatePickerSelectionEvents } from './useDatePickerSelectionEvents';
import { useCommonDatePickerAllowedDates } from '../../hooks/useCommonDatePickerAllowedDates';
import { externalizeValue } from '../utils/externalizeValue';
import { useDatePickerFormattedValue } from './useDatePickerFormattedValue';
import { useCommonDatePickerInputProps } from '../../hooks/useCommonDatePickerInputProps';
import { useDatePickerTodayButton } from './useDatePickerTodayButton';
import { useCommonDatePickerActionButtons } from '../../hooks/useCommonDatePickerActionButtons';
import { useCommonDatePickerCompatibility } from '../../hooks/useCommonDatePickerCompatibility';
import { useDatePickerMaskedInput } from './useDatePickerMaskedInput';

export const useDatePicker = <E extends HTMLDivElement>(
    props: DatePickerPropsType,
    ref: RefType<E>,
) => {
    const {
        enableTimePicker,
        enableMinWidthAutoCorrection,
        defaultDateValue,
        dateValue,
        onDateValueChange,
        yearRange,
        enableMonthYearPickerMode,
        isMonthAllowed,
    } = props;

    // controlled and uncontrolled state: dateValue, defaultDateValue and onDateValueChange mapped to internalValue
    const [externalValue, setExternalValue] = useControlledState<
        DatePickerPropsType['dateValue']
    >(defaultDateValue, dateValue, onDateValueChange);

    // internalValue as an object
    const internalValue = useMemo<DateVectorRange>(
        () => DateVectorRange.createFromLocalDate(externalValue),
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
    } = useCommonDatePickerPanel<DateValueType, E>({ ref }, props);

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
    } = useCommonDatePickerState<DateValueType>(
        { dropdownOpen, internalValue },
        props,
    );

    const { isDateAllowed, isDateFree, isDateSelectable } =
        useCommonDatePickerAllowedDates<DateValueType>(
            { dropdownOpen, currentDateVector },
            props,
        );

    const {
        onDateTimeChange,
        onTimeSelectorValueChange,
        applyValue,
        clearValue,
    } = useCommonDatePickerCallbacks<DateValueType>(
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

    const { onTodayButtonClick } = useDatePickerTodayButton(
        {
            currentDateVector,
            onDateTimeChange,
            setDisplayedDateVector,
        },
        props,
    );

    const { showActions, actionBarProps, enableCloseOnSelect } =
        useCommonDatePickerActionButtons(
            {
                applyValue,
                clearValue,
                closeDropdown,
                enableApplyButton,
            },
            props,
        );

    const selectionEventProps = useDatePickerSelectionEvents(
        {
            value: dirtyInternalValueVector,
            onChange: onDateTimeChange,
            isDateSelectable,
            enableCloseOnSelect,
            closeDropdown,
            enableTimePicker,
            timeSelectorValue,
        },
        props,
    );

    const formattedValue = useDatePickerFormattedValue(
        {
            internalValue,
        },
        props,
    );

    const { inputProperties, inactive } = useCommonDatePickerInputProps(
        {},
        props,
    );

    const { value, showMaskedInput, onChange, onFocus } =
        useDatePickerMaskedInput(
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
                enableMonthYearPickerMode,
            },

            props,
        );

    const onRootClick = inactive ? undefined : toggleDropdown;

    return {
        rootProps: {
            ...props,
            enableTimePicker,
            enableMinWidthAutoCorrection,
            ref: rootRef,
        },
        inputProps: {
            ...inputProperties,
            onRootClick,
            ref: inputRef,
            value: formattedValue,
        },
        inputMaskProps: {
            ...inputProperties,
            value,
            onChange,
            onFocus,
        },
        onInputIconClick: onRootClick,
        showMaskedInput,
        portalProps,
        dropdownProps,
        arrowProps,
        topBarProps: {
            displayedDateVector, // to show the currently displayed year and month
            onDisplayedDateVectorChange: setDisplayedDateVector, // to shift months back and forward
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
            yearRange,
            enableMonthYearPickerMode,
            onDateTimeChange,
            isMonthAllowed,
        },
        timeSelectorProps: {
            value: timeSelectorValue,
            onChange: onTimeSelectorValueChange,
        },

        displayMonthYearSelector: monthYearSelectorOpen,
        open: dropdownOpen,

        showTimePicker: !!enableTimePicker && !enableMonthYearPickerMode,

        showActions,
        actionBarProps: {
            ...actionBarProps,
            onTodayButtonClick,
        },
    };
};
