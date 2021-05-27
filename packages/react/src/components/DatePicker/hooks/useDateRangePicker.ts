import { useMemo } from 'react';
import { DateRangePickerPropsType, DateValueRangeType } from '../type';
import { RefType } from '../../../type';
import { useDateRangePickerSelectionEvents } from './useDateRangePickerSelectionEvents';
import { formatDateTimeVector } from '../utils/formatDateTimeVector';
import { useDatePickerPanel } from './useDatePickerPanel';
import { useDatePickerState } from './useDatePickerState';
import { useDatePickerCallbacks } from './useDatePickerCallbacks';
import { useControlledState } from '../../../system';
import { DateVectorRange } from '../utils/DateVectorRange';
import { TimeVector24 } from '../utils/TimeVector24';

const externalizeValue = (value: DateVectorRange, timeVector: TimeVector24) =>
    value.convertToLocalDateRange(timeVector);

export const useDateRangePicker = <E extends HTMLDivElement>(
    {
        enableTimePicker,
        defaultDateValue,
        dateValue,
        onDateValueChange,
        label,
        disabled,
        readOnly,
        'data-testid-input': dataTestIdInput,
        formatDateTime,
        formatDateTimeRange,
        ...restProps
    }: DateRangePickerPropsType,
    ref: RefType<E>,
) => {
    // controlled and uncontrolled state: dateValue, defaultDateValue and onDateValueChange mapped to internalValue
    const [externalValue, setExternalValue] = useControlledState<
        DateRangePickerPropsType['dateValue']
    >(defaultDateValue, dateValue, onDateValueChange);

    // internalValue as an object (former internalValueUTC)
    const internalValue = useMemo<DateVectorRange>(
        () => DateVectorRange.createFromLocalDateRange(externalValue),
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
    } = useDatePickerPanel<DateValueRangeType, E>(restProps, ref);

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
    } = useDatePickerState<DateValueRangeType>(
        { reallyOpen, internalValue },
        panelRestProps,
    );

    const {
        onDateSelectorChange,
        onTimeSelectorValueChange,
        applyValue,
        enableActionButtons,
        restProps: callbacksRestProps,
    } = useDatePickerCallbacks<DateValueRangeType>(
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

    const selectionEventProps = useDateRangePickerSelectionEvents({
        value: dirtyInternalValueVector,
        onChange: onDateSelectorChange,
    });

    // todo: move this function away
    const formattedValue = useMemo(() => {
        if (internalValue.isEmpty()) {
            return '';
        }

        const dateStartFormatted = formatDateTime
            ? formatDateTime(internalValue.dateStart!.convertToLocalDate())
            : formatDateTimeVector(internalValue.dateStart, enableTimePicker);

        if (internalValue.isNarrow()) {
            return dateStartFormatted;
        }

        const dateEndFormatted = formatDateTime
            ? formatDateTime(internalValue.dateEnd!.convertToLocalDate())
            : formatDateTimeVector(internalValue.dateEnd, enableTimePicker);

        return formatDateTimeRange
            ? formatDateTimeRange(dateStartFormatted, dateEndFormatted)
            : `${dateStartFormatted} - ${dateEndFormatted}`;
    }, [internalValue, enableTimePicker, formatDateTime, formatDateTimeRange]);

    return {
        rootProps: {
            ...callbacksRestProps,
            enableTimePicker,
            ref: rootRef,
        },
        inputProps: {
            readOnly: true,
            label,
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
