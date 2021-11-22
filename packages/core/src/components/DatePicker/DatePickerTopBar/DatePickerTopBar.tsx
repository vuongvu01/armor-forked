import React, { forwardRef } from 'react';
import { ArrowRightIcon } from '@deliveryhero/armor-icons';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useDatePickerTopBarClassNames } from './hooks/useDatePickerTopBarClassNames';
import { useDatePickerTopBar } from './hooks/useDatePickerTopBar';
import {
    DatePickerTopBarMonthNavigation,
    DatePickerTopBarMonthNavigationButtonBackward,
    DatePickerTopBarMonthNavigationButtonForward,
    DatePickerTopBarMonthYearSelectorToggle,
    DatePickerTopBarMonthYearSelectorToggleArrow,
    DatePickerTopBarRoot,
} from './style';
import { DatePickerTopBarPropsType } from './type';
import { DATE_PICKER_TOP_BAR_CLASS_PREFIX } from './constants';

/**
 * @internal
 */
export const DatePickerTopBar = forwardRef<
    HTMLDivElement,
    DatePickerTopBarPropsType
>(function DatePickerTopBar({ className, ...props }, ref) {
    const theme = useComponentTheme(DATE_PICKER_TOP_BAR_CLASS_PREFIX);
    const classNameComponents = useDatePickerTopBarClassNames(
        DATE_PICKER_TOP_BAR_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        monthYearSelectorToggleProps,
        monthYearSelectorToggleArrowProps,
        monthNavigationButtonBackwardProps,
        monthNavigationButtonForwardProps,

        year,
        monthName,
    } = useDatePickerTopBar(props, ref);

    return (
        <DatePickerTopBarRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            <DatePickerTopBarMonthYearSelectorToggle
                {...monthYearSelectorToggleProps}
                theme={theme}
                className={classNameComponents.MonthYearSelectorToggle}
            >
                {monthName} {year}
                <DatePickerTopBarMonthYearSelectorToggleArrow
                    {...monthYearSelectorToggleArrowProps}
                    className={classNameComponents.MonthYearSelectorToggleArrow}
                />
            </DatePickerTopBarMonthYearSelectorToggle>
            <DatePickerTopBarMonthNavigation
                theme={theme}
                className={classNameComponents.MonthNavigation}
            >
                <DatePickerTopBarMonthNavigationButtonBackward
                    {...monthNavigationButtonBackwardProps}
                    theme={theme}
                    className={
                        classNameComponents.MonthNavigationButtonBackward
                    }
                >
                    <ArrowRightIcon
                        medium
                        className={
                            classNameComponents.MonthNavigationButtonArrow
                        }
                    />
                </DatePickerTopBarMonthNavigationButtonBackward>
                <DatePickerTopBarMonthNavigationButtonForward
                    {...monthNavigationButtonForwardProps}
                    theme={theme}
                    className={classNameComponents.MonthNavigationButtonForward}
                >
                    <ArrowRightIcon
                        medium
                        className={
                            classNameComponents.MonthNavigationButtonArrow
                        }
                    />
                </DatePickerTopBarMonthNavigationButtonForward>
            </DatePickerTopBarMonthNavigation>
        </DatePickerTopBarRoot>
    );
});

DatePickerTopBar.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerTopBar.propTypes = {};
