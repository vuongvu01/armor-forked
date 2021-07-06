import { useMemo } from 'react';
import { DatePickerPropsType } from '../type';
import { DateValueType } from '../../type';
import { RefType } from '../../../../type';
import { useDatePickerPanel } from '../../hooks/useDatePickerPanel';
import { useDatePickerState } from '../../hooks/useDatePickerState';
import { useDatePickerCallbacks } from '../../hooks/useDatePickerCallbacks';
import { formatDateTimeVector } from '../../utils/formatDateTimeVector';
import { useControlledState } from '../../../../system';
import { DateVectorRange } from '../../utils/DateVectorRange';
import { TimeVector24 } from '../../utils/TimeVector24';
import { useDatePickerSelectionEvents } from '../../hooks/useDatePickerSelectionEvents';

const externalizeValue = (value: DateVectorRange, timeVector: TimeVector24) =>
    value.convertToLocalDate(timeVector);

export const useDatePicker = <E extends HTMLDivElement>(
    {
        enableTimePicker,
        enableMinWidthAutoCorrection,
        defaultDateValue,
        dateValue,
        onDateValueChange,
        label,
        placeholder,
        disabled,
        readOnly,
        error,
        'data-testid-input': dataTestIdInput,
        formatDateTime,
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

    // todo: move this function away
    const formattedValue = useMemo(() => {
        if (internalValue.isEmpty()) {
            return '';
        }

        if (formatDateTime) {
            return formatDateTime(
                internalValue.dateStart!.convertToLocalDate(),
            );
        }

        return formatDateTimeVector(internalValue.dateStart, enableTimePicker);
    }, [internalValue, enableTimePicker, formatDateTime]);

    return {
        rootProps: {
            ...callbacksRestProps,
            enableTimePicker,
            enableMinWidthAutoCorrection,
            ref: rootRef,
        },
        inputProps: {
            readOnly: true,
            error,
            disabled,
            label,
            placeholder,
            ref: inputRef,
            value: formattedValue,
            enableRootRef: true,
            enableFocusOnRootClick: true,
            onRootClick: disabled || readOnly ? undefined : toggleOpen,
            'data-testid-input': dataTestIdInput,
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