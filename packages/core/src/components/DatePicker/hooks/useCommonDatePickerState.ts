import { useEffect, useMemo, useState } from 'react';
import { useFlagState, useDerivedState } from '@deliveryhero/armor-system';

import {
    DatePickerEffectiveCommonPropsType,
    DatePickerEffectiveGenericPropsType,
} from '../type';
import { DateVectorRange } from '../utils/DateVectorRange';
import { DateVector } from '../utils/DateVector';
import { TimeVector24 } from '../utils/TimeVector24';

type UseCommonDatePickerStatePropsType = {
    dropdownOpen: boolean;
    internalValue: DateVectorRange;
};

export const useCommonDatePickerState = <V>(
    { dropdownOpen, internalValue }: UseCommonDatePickerStatePropsType,
    {
        defaultMonthYearSelectorOpen,
        currentDate,
    }: DatePickerEffectiveGenericPropsType<V> &
        DatePickerEffectiveCommonPropsType,
) => {
    // the date range touched (pre-selected) by a user. It keeps the value until a user mashes "Ok"
    const [dirtyInternalValueVector, setDirtyInternalValueVector] = useState<
        DateVectorRange
    >(internalValue.clone());
    useEffect(() => {
        setDirtyInternalValueVector(internalValue.clone());
    }, [internalValue]);

    // the date we have at the moment
    const currentDateVector = useMemo(
        () => DateVector.createFromLocalDate(currentDate),
        [dropdownOpen, currentDate],
    );

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

    const [timeSelectorValue, setTimeSelectorValue] = useDerivedState<
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

    const [
        monthYearSelectorOpen,
        ,
        ,
        ,
        onMonthYearSelectorToggle,
    ] = useFlagState(defaultMonthYearSelectorOpen);

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
    };
};
