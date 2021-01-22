import { useCallback, useState } from 'react';
import { DatePickerTopBarPropsType } from '../type';
import { ReferenceType } from '../../../../type';

export const useDatePickerTopBar = (
    {
        onMonthYearToggleClick,
        monthYearSelectorOpen,
        ...restProps
    }: DatePickerTopBarPropsType,
    ref: ReferenceType,
) => {
    // put all your component logic here

    return {
        rootProps: {
            ...restProps,
            ref,
        },

        monthYearSelectorToggleProps: {
            open: !!monthYearSelectorOpen,
            onClick: onMonthYearToggleClick,
        },

        monthNavigationButtonBackwardProps: {
            disabled: !!monthYearSelectorOpen,
        },
        monthNavigationButtonForwardProps: {
            disabled: !!monthYearSelectorOpen,
        },
    };
};
