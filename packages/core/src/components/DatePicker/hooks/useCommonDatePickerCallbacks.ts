import { useCallback } from 'react';

import { DateVectorRange } from '../utils/DateVectorRange';
import { TimeVector24 } from '../utils/TimeVector24';
import { DatePickerEffectiveCommonPropsType } from '../type';

type UseDatePickerCallbacksPropsType<V> = {
    setDirtyInternalValueVector: (value: DateVectorRange) => void;
    setExternalValue: (value: V | undefined | null) => void;
    timeSelectorValue: TimeVector24;
    setTimeSelectorValue: (value: TimeVector24) => void;
    dirtyInternalValueVector: DateVectorRange;
    externalizeValue: (
        value: DateVectorRange,
        timeVector?: TimeVector24,
    ) => V | undefined;
    enableApplyButton: boolean;
};

export const useCommonDatePickerCallbacks = <V>(
    {
        setDirtyInternalValueVector,
        setExternalValue,
        timeSelectorValue,
        setTimeSelectorValue,
        dirtyInternalValueVector,
        externalizeValue,
        enableApplyButton,
    }: UseDatePickerCallbacksPropsType<V>,
    _: DatePickerEffectiveCommonPropsType,
) => {
    const autoUpdateInternalValue = !enableApplyButton;

    // should be called to update the value (internal + external)
    const onDateTimeChange = useCallback(
        (newValueDateVectorRange: DateVectorRange) => {
            setDirtyInternalValueVector(newValueDateVectorRange);

            if (autoUpdateInternalValue) {
                setExternalValue(externalizeValue(newValueDateVectorRange));
            }
        },
        [
            setDirtyInternalValueVector,
            autoUpdateInternalValue,
            setExternalValue,
            externalizeValue,
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
            setTimeSelectorValue,
            autoUpdateInternalValue,
            setExternalValue,
            externalizeValue,
            dirtyInternalValueVector,
        ],
    );

    const applyValue = useCallback(() => {
        setExternalValue(
            externalizeValue(dirtyInternalValueVector, timeSelectorValue),
        );
    }, [
        setExternalValue,
        externalizeValue,
        dirtyInternalValueVector,
        timeSelectorValue,
    ]);

    const clearValue = useCallback(() => {
        setDirtyInternalValueVector(DateVectorRange.createFromLocalDate());
        setExternalValue(null);
    }, [setDirtyInternalValueVector, setExternalValue]);

    return {
        onDateTimeChange,
        onTimeSelectorValueChange,
        applyValue,
        clearValue,
    };
};
