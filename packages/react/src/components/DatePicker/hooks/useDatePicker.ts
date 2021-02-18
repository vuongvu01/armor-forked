import { useMemo } from 'react';
import { DatePickerPropsType, DateValueType } from '../type';
import { ReferenceType } from '../../../type';
import { useDatePickerPanel } from './useDatePickerPanel';
import { useDatePickerState } from './useDatePickerState';
import { useDatePickerCallbacks } from './useDatePickerCallbacks';
import { formatDateTimeVector } from '../utils/formatDateTimeVector';
import { useControlledState } from '../../../system/hooks/useControlledState';
import { DateVectorRange } from '../utils/DateVectorRange';
import { TimeVector24 } from '../utils/TimeVector24';
import { useDatePickerSelectionEvents } from './useDatePickerSelectionEvents';

const externalizeValue = (value: DateVectorRange, timeVector: TimeVector24) =>
    value.convertToLocalDate(timeVector);

export const useDatePicker = (
    {
        enableTimePicker,
        defaultDateValue,
        dateValue,
        onDateValueChange,
        ...restProps
    }: DatePickerPropsType,
    ref: ReferenceType,
) => {
    // controlled and uncontrolled state: dateValue, defaultDateValue and onDateValueChange mapped to internalValue
    const [externalValue, setExternalValue] = useControlledState<
        DateValueType | undefined
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
    } = useDatePickerPanel<DateValueType>(restProps, ref);

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
        { reallyOpen, internalValue },
        panelRestProps,
    );

    const {
        onDateSelectorChange,
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
        onChange: onDateSelectorChange,
    });

    const formattedValue = useMemo(() => {
        if (internalValue.isEmpty()) {
            return '';
        }

        return formatDateTimeVector(internalValue.dateStart, enableTimePicker);
    }, [internalValue, enableTimePicker]);

    return {
        rootProps: {
            ...callbacksRestProps,
            enableTimePicker,
            ref: rootRef,
        },
        inputProps: {
            readOnly: true,
            label: 'Select date',
            ref: inputRef,
            value: formattedValue,
            enableRootRef: true,
            enableFocusOnRootClick: true,
            onRootClick: toggleOpen,
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
            applyValue, // to copy dirty value to actual
            setClose, // to close the dropdown
        },
        daySelectorProps: {
            displayedDateVector, // to indicate the currently displayed year and month
            onDisplayedDateVectorChange: setDisplayedDateVector, // to shit months back and forward
            dirtyInternalValueVector, // to indicate the selected day
            currentDateVector, // to indicate the current day in the matrix
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

        enableActionButtons,
        enableTimePicker,
    };
};
