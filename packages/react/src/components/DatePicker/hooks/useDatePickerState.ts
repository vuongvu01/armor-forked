import { useEffect, useMemo, useState } from 'react';
import { DatePickerEffectiveGenericPropsType } from '../type';
import { DateVectorRange } from '../utils/DateVectorRange';
import { DateVector } from '../utils/DateVector';
import { TimeVector24 } from '../utils/TimeVector24';
import { useFlagState } from '../../../system/hooks/useFlagState';
import { useGuidedState } from '../../../system/hooks/useGuidedState';

type DatePickerStateType = {
    reallyOpen: boolean;
    internalValue: DateVectorRange;
};

export const useDatePickerState = <V>(
    { reallyOpen, internalValue }: DatePickerStateType,
    restProps: DatePickerEffectiveGenericPropsType<V>,
) => {
    // the date range touched (pre-selected) by a user. It keeps the value until a user mashes "Ok"
    const [dirtyInternalValueVector, setDirtyInternalValueVector] = useState<
        DateVectorRange
    >(internalValue.clone());
    useEffect(() => {
        setDirtyInternalValueVector(internalValue.clone());
    }, [internalValue]);

    // the date we have at the moment
    const currentDateVector = useMemo(() => DateVector.createFromLocalDate(), [
        reallyOpen,
    ]);
    const currentTimeVector = useMemo(
        () => TimeVector24.createFromDateVector(currentDateVector),
        [currentDateVector],
    );

    // the date which is displayed, but not yet selected or pre-selected
    const [displayedDateVector, setDisplayedDateVector] = useState<DateVector>(
        dirtyInternalValueVector.dateStart
            ? dirtyInternalValueVector.dateStart.clone()
            : currentDateVector.clone(),
    );

    const [timeSelectorValue, setTimeSelectorValue] = useGuidedState<
        TimeVector24
    >(
        () =>
            dirtyInternalValueVector.dateStart
                ? TimeVector24.createFromDateVector(
                      dirtyInternalValueVector.dateStart,
                  )
                : currentTimeVector,
        [dirtyInternalValueVector, currentTimeVector],
    );

    const [monthYearSelectorOpen, onMonthYearSelectorToggle] = useFlagState();

    return {
        dirtyInternalValueVector,
        setDirtyInternalValueVector,

        timeSelectorValue,
        setTimeSelectorValue,

        displayedDateVector,
        setDisplayedDateVector,

        currentDateVector,

        monthYearSelectorOpen,
        onMonthYearSelectorToggle,

        restProps,
    };
};
