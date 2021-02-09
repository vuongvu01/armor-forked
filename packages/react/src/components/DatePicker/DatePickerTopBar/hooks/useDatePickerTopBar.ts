import { useCallback } from 'react';
import { DatePickerTopBarPropsType } from '../type';
import { ReferenceType } from '../../../../type';

export const useDatePickerTopBar = (
    {
        displayedDateVector,
        onDisplayedDateVectorChange,
        onMonthYearToggleClick,
        monthYearSelectorOpen,
        ...restProps
    }: DatePickerTopBarPropsType,
    ref: ReferenceType,
) => {
    const onPreviousMonthClick = useCallback(() => {
        const newVector = displayedDateVector.clone();
        newVector.addMonth(-1);
        onDisplayedDateVectorChange(newVector);
    }, [displayedDateVector, onDisplayedDateVectorChange]);

    const onNextMonthClick = useCallback(() => {
        const newVector = displayedDateVector.clone();
        newVector.addMonth(1);
        onDisplayedDateVectorChange(newVector);
    }, [displayedDateVector, onDisplayedDateVectorChange]);

    return {
        rootProps: {
            ...restProps,
            ref,
        },

        monthYearSelectorToggleProps: {
            open: monthYearSelectorOpen,
            onClick: onMonthYearToggleClick,
        },

        monthNavigationButtonBackwardProps: {
            disabled: monthYearSelectorOpen,
            onClick: onPreviousMonthClick,
        },

        monthNavigationButtonForwardProps: {
            disabled: monthYearSelectorOpen,
            onClick: onNextMonthClick,
        },

        year: displayedDateVector.year,
        monthName: displayedDateVector.monthName,
    };
};
