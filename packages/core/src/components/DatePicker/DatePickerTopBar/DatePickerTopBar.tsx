import React, { forwardRef, memo } from 'react';
import { ArrowRightIcon } from '@deliveryhero/armor-icons';

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
export const DatePickerTopBar = memo(
    forwardRef<HTMLDivElement, DatePickerTopBarPropsType>(
        function DatePickerTopBar({ className, ...props }, ref) {
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
                    className={classNameComponents.Root}
                >
                    <DatePickerTopBarMonthYearSelectorToggle
                        {...monthYearSelectorToggleProps}
                        className={classNameComponents.MonthYearSelectorToggle}
                    >
                        {monthName} {year}
                        <DatePickerTopBarMonthYearSelectorToggleArrow
                            {...monthYearSelectorToggleArrowProps}
                            small
                            marginLeft={1}
                            className={
                                classNameComponents.MonthYearSelectorToggleArrow
                            }
                        />
                    </DatePickerTopBarMonthYearSelectorToggle>
                    <DatePickerTopBarMonthNavigation
                        className={classNameComponents.MonthNavigation}
                    >
                        <DatePickerTopBarMonthNavigationButtonBackward
                            {...monthNavigationButtonBackwardProps}
                            className={
                                classNameComponents.MonthNavigationButtonBackward
                            }
                        >
                            <ArrowRightIcon
                                small
                                className={
                                    classNameComponents.MonthNavigationButtonArrow
                                }
                            />
                        </DatePickerTopBarMonthNavigationButtonBackward>
                        <DatePickerTopBarMonthNavigationButtonForward
                            {...monthNavigationButtonForwardProps}
                            className={
                                classNameComponents.MonthNavigationButtonForward
                            }
                        >
                            <ArrowRightIcon
                                small
                                className={
                                    classNameComponents.MonthNavigationButtonArrow
                                }
                            />
                        </DatePickerTopBarMonthNavigationButtonForward>
                    </DatePickerTopBarMonthNavigation>
                </DatePickerTopBarRoot>
            );
        },
    ),
);

DatePickerTopBar.displayName = DATE_PICKER_TOP_BAR_CLASS_PREFIX;
