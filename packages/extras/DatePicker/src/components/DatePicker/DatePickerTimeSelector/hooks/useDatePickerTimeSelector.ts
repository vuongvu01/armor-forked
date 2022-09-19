import {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    useCallback,
    useMemo,
} from 'react';
import { useDerivedState } from '@deliveryhero/armor-system';
import { DatePickerTimeSelectorPropsType } from '../type';
import { RefType } from '../../../../type';
import { TimeVector12ModeType } from '../../utils/TimeVector12';
import { getValidTimeFragment } from '../utils/getValidTimeFragment';

export const useDatePickerTimeSelector = <E extends HTMLDivElement>(
    { value, onChange, ...restProps }: DatePickerTimeSelectorPropsType,
    ref: RefType<E>,
) => {
    const value12 = useMemo(() => value.convertTo12(), [value]);

    // todo: refactor this, leave only one state!

    const [hourValue, setHourValue] = useDerivedState<string>(
        () => value12.formattedHour,
        [value12],
    );
    const [minuteValue, setMinuteValue] = useDerivedState<string>(
        () => value12.formattedMinute,
        [value12],
    );
    const [mode, setMode] = useDerivedState<TimeVector12ModeType>(
        () => value12.mode,
        [value12],
    );

    const onHourInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newHour = event.target.value;
            setHourValue(newHour);
        },
        [setHourValue],
    );

    const onMinuteInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newMinute = event.target.value;
            setMinuteValue(newMinute);
        },
        [setMinuteValue],
    );

    const onTimeInputFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            event.target.select();
        },
        [],
    );

    const onTimeInputKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            const { keyCode } = event;

            if (
                keyCode !== 8 &&
                keyCode !== 9 &&
                keyCode !== 32 &&
                (keyCode < 48 || keyCode > 57)
            ) {
                event.preventDefault();
            }
        },
        [],
    );

    const onHourInputBlur = useCallback(
        (event: any) => {
            const newHour = event.target.value;
            const newHourInt = getValidTimeFragment(newHour, 12);

            if (newHourInt !== null) {
                onChange(value12.clone({ hour: newHourInt }).convertTo24());
            }
        },
        [onChange, value12],
    );

    const onMinuteInputBlur = useCallback(
        (event: any) => {
            const newMinute = event.target.value;
            const newMinuteInt = getValidTimeFragment(newMinute, 59);

            if (newMinuteInt !== null) {
                onChange(value12.clone({ minute: newMinuteInt }).convertTo24());
            }
        },
        [onChange, value12],
    );

    const onDayPeriodChange = useCallback(
        (modeVal: TimeVector12ModeType) => {
            setMode(modeVal);
            onChange(value12.clone({ mode: modeVal }).convertTo24());
        },
        [onChange, setMode, value12],
    );

    return {
        rootProps: {
            ...restProps,
            ref,
        },
        hourInputProps: {
            value: hourValue,
            onChange: onHourInputChange,
            onFocus: onTimeInputFocus,
            onBlur: onHourInputBlur,
            onKeyDown: onTimeInputKeyDown,
            maxLength: 2,
        },
        minuteInputProps: {
            value: minuteValue,
            onChange: onMinuteInputChange,
            onFocus: onTimeInputFocus,
            onBlur: onMinuteInputBlur,
            onKeyDown: onTimeInputKeyDown,
            maxLength: 2,
        },
        buttonDayPeriodProps: {
            switchName: mode,
            onSwitchNameChange: (modeVal: string) =>
                onDayPeriodChange(modeVal as TimeVector12ModeType),
        },
    };
};
