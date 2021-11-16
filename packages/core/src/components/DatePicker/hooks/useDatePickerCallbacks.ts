import { useCallback } from 'react';

import { DateVectorRange } from '../utils/DateVectorRange';
import { TimeVector24 } from '../utils/TimeVector24';
import {
    DatePickerEffectiveCommonPropsType,
    DatePickerEffectiveGenericPropsType,
} from '../type';

type DatePickerCallbacksType<V> = {
    setDirtyInternalValueVector: (value: DateVectorRange) => void;
    setExternalValue: (value: V | undefined) => void;
    timeSelectorValue: TimeVector24;
    setTimeSelectorValue: (value: TimeVector24) => void;
    dirtyInternalValueVector: DateVectorRange;
    externalizeValue: (
        value: DateVectorRange,
        timeVector: TimeVector24,
    ) => V | undefined;
};

export const useDatePickerCallbacks = <V>(
    {
        setDirtyInternalValueVector,
        setExternalValue,
        timeSelectorValue,
        setTimeSelectorValue,
        dirtyInternalValueVector,
        externalizeValue,
    }: DatePickerCallbacksType<V>,
    {
        enableActionButtons,
        ...restProps
    }: DatePickerEffectiveGenericPropsType<V> &
        DatePickerEffectiveCommonPropsType,
) => {
    const autoUpdateInternalValue = !enableActionButtons;

    const onDateSelectorChange = useCallback(
        (newValueDateVectorRange: DateVectorRange) => {
            setDirtyInternalValueVector(newValueDateVectorRange);

            if (autoUpdateInternalValue) {
                setExternalValue(
                    externalizeValue(
                        newValueDateVectorRange,
                        timeSelectorValue,
                    ),
                );
            }
        },
        [
            setExternalValue,
            setDirtyInternalValueVector,
            timeSelectorValue,
            autoUpdateInternalValue,
        ],
    );

    const onTimeSelectorValueChange = useCallback(
        (newTimeSelectorValue: TimeVector24) => {
            setTimeSelectorValue(newTimeSelectorValue);

            if (autoUpdateInternalValue) {
                setExternalValue(
                    externalizeValue(
                        dirtyInternalValueVector,
                        newTimeSelectorValue,
                    ),
                );
            }
        },
        [
            dirtyInternalValueVector,
            autoUpdateInternalValue,
            setTimeSelectorValue,
            setExternalValue,
        ],
    );

    const applyValue = useCallback(() => {
        setExternalValue(
            externalizeValue(dirtyInternalValueVector, timeSelectorValue),
        );
    }, [setExternalValue, dirtyInternalValueVector, timeSelectorValue]);

    return {
        restProps,
        onDateSelectorChange,
        onTimeSelectorValueChange,
        applyValue,
        enableActionButtons,
    };
};
