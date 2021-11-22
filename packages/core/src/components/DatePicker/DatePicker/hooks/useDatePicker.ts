import { useMemo } from 'react';
import { useControlledState } from '@deliveryhero/armor-system';

import { DatePickerPropsType } from '../type';
import { DateValueType } from '../../type';
import { RefType } from '../../../../type';
import { useDatePickerPanel } from '../../hooks/useDatePickerPanel';
import { useDatePickerState } from '../../hooks/useDatePickerState';
import { useDatePickerCallbacks } from '../../hooks/useDatePickerCallbacks';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { useDatePickerSelectionEvents } from './useDatePickerSelectionEvents';
import { useDatePickerAllowedDates } from '../../hooks/useDatePickerAllowedDates';
import { externalizeValue } from '../utils/externalizeValue';
import { useFormattedValue } from './useFormattedValue';
import { useInputProps } from '../../hooks/useInputProps';

export const useDatePicker = <E extends HTMLDivElement>(
    {
        enableTimePicker,
        enableMinWidthAutoCorrection,
        defaultDateValue,
        dateValue,
        onDateValueChange,
        formatDateTime,
        onDayMouseEnter,
        onDayMouseLeave,
        enableTodayButton,
        ...restProps
    }: DatePickerPropsType,
    ref: RefType<E>,
) => {
    // controlled and uncontrolled state: dateValue, defaultDateValue and onDateValueChange mapped to internalValue
    const [externalValue, setExternalValue] = useControlledState<
        DatePickerPropsType['dateValue']
    >(defaultDateValue, dateValue, onDateValueChange);

    // internalValue as an object
    const internalValue = useMemo<DateVectorRange>(
        () => DateVectorRange.createFromLocalDate(externalValue),
        [externalValue],
    );

    const {
        rootRef,
        inputRef,

        reallyOpen,
        toggleOpen,
        setClose,

        arrowProps,
        dropdownProps,
        portalProps,
        restProps: panelRestProps,
    } = useDatePickerPanel<DateValueType, E>(restProps, ref);

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

        restProps: stateRestProps,
    } = useDatePickerState<DateValueType>(
        { reallyOpen: !!reallyOpen, internalValue },
        panelRestProps,
    );

    const { isDateAllowed } = useDatePickerAllowedDates<DateValueType>(
        { reallyOpen: !!reallyOpen, currentDateVector },
        restProps,
    );

    const {
        onDateTimeChange, // should be called to update the value (internal + external)
        onTimeSelectorValueChange,
        applyValue,
        enableActionButtons,
        restProps: callbacksRestProps,
    } = useDatePickerCallbacks<DateValueType>(
        {
            setDirtyInternalValueVector,
            setExternalValue,
            timeSelectorValue,
            setTimeSelectorValue,
            dirtyInternalValueVector,
            externalizeValue,
        },
        stateRestProps,
    );

    const selectionEventProps = useDatePickerSelectionEvents({
        value: dirtyInternalValueVector,
        onChange: onDateTimeChange,
        onDayMouseEnter,
        onDayMouseLeave,
    });

    const formattedValue = useFormattedValue({
        internalValue,
        enableTimePicker,
        formatDateTime,
    });

    const { inputProperties, inactive } = useInputProps(restProps);

    const showActions = !!(enableActionButtons || enableTodayButton);

    return {
        rootProps: {
            ...callbacksRestProps,
            enableTimePicker,
            enableMinWidthAutoCorrection,
            ref: rootRef,
        },
        inputProps: {
            ...inputProperties,
            ref: inputRef,
            value: formattedValue,
            onRootClick: inactive ? undefined : toggleOpen,
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
        actionBarProps: {
            enableApplyButtons: !!enableActionButtons,
            applyValue, // to copy dirty value to actual
            setClose, // to close the dropdown
        },
        daySelectorProps: {
            displayedDateVector, // to indicate the currently displayed year and month
            dirtyInternalValueVector, // to indicate the selected day
            currentDateVector, // to indicate the current day in the matrix
            isDateAllowed,
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
        open: reallyOpen,

        showActions,
        showTodayButton: !!enableTodayButton,
        showTimePicker: !!enableTimePicker,

        getTodayButtonProps: () => {
            const onTodayButtonClick = () => {
                const newVector = new DateVectorRange(
                    currentDateVector.clone(),
                    currentDateVector.clone(),
                );
                onDateTimeChange(newVector); // change value
                if (newVector.dateStart) {
                    setDisplayedDateVector(newVector.dateStart); // update the display
                }
            };

            if (enableActionButtons) {
                return {
                    tertiary: true,
                    paddingX: 1,
                    margin: -1,
                    onClick: onTodayButtonClick,
                };
            }

            return {
                secondary: true,
                wide: true,
                onClick: onTodayButtonClick,
            };
        },
    };
};
