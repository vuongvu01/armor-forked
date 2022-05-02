import React, { forwardRef, memo } from 'react';

import { useDatePickerMonthYearSelectorClassNames } from './hooks/useDatePickerMonthYearSelectorClassNames';
import { useDatePickerMonthYearSelector } from './hooks/useDatePickerMonthYearSelector';
import {
    DatePickerMonthYearSelectorRoot,
    DatePickerMonthYearSelectorScroll,
    DatePickerMonthYearSelectorList,
    DatePickerMonthYearSelectorYear,
    DatePickerMonthYearSelectorYearTitle,
    DatePickerMonthYearSelectorMonthList,
    DatePickerMonthYearSelectorMonth,
} from './style';
import { DatePickerMonthYearSelectorPropsType } from './type';
import { DATE_PICKER_MONTH_YEAR_SELECTOR_CLASS_PREFIX } from './constants';

/**
 * @internal
 */
export const DatePickerMonthYearSelector = memo(
    forwardRef<HTMLDivElement, DatePickerMonthYearSelectorPropsType>(
        function DatePickerMonthYearSelector({ className, ...props }, ref) {
            const classNameComponents =
                useDatePickerMonthYearSelectorClassNames(
                    DATE_PICKER_MONTH_YEAR_SELECTOR_CLASS_PREFIX,
                    className,
                );

            const {
                rootProps,
                scrollProps,
                listProps,
                yearTitleProps,
                monthProps,
                months,
                yearRange,
                displayedYear,
                displayedMonth,
                openYear,
            } = useDatePickerMonthYearSelector(props, ref);

            return (
                <DatePickerMonthYearSelectorRoot
                    {...rootProps}
                    className={classNameComponents.Root}
                >
                    <DatePickerMonthYearSelectorScroll
                        {...scrollProps}
                        className={classNameComponents.Scroll}
                    >
                        <DatePickerMonthYearSelectorList
                            {...listProps}
                            className={classNameComponents.List}
                        >
                            {yearRange.map((year) => (
                                <DatePickerMonthYearSelectorYear
                                    className={classNameComponents.Year}
                                    key={year}
                                >
                                    <DatePickerMonthYearSelectorYearTitle
                                        {...yearTitleProps}
                                        className={
                                            classNameComponents.YearTitle
                                        }
                                        data-year={year}
                                    >
                                        {year}
                                    </DatePickerMonthYearSelectorYearTitle>
                                    {openYear === year && (
                                        <DatePickerMonthYearSelectorMonthList
                                            className={
                                                classNameComponents.MonthList
                                            }
                                        >
                                            {months.map(
                                                (monthName, monthNumber) => (
                                                    <DatePickerMonthYearSelectorMonth
                                                        {...monthProps}
                                                        className={
                                                            classNameComponents.Month
                                                        }
                                                        key={monthName}
                                                        data-month={monthNumber}
                                                        data-year={year}
                                                        selected={
                                                            monthNumber ===
                                                                displayedMonth &&
                                                            year ===
                                                                displayedYear
                                                        }
                                                    >
                                                        {monthName}
                                                    </DatePickerMonthYearSelectorMonth>
                                                ),
                                            )}
                                        </DatePickerMonthYearSelectorMonthList>
                                    )}
                                </DatePickerMonthYearSelectorYear>
                            ))}
                        </DatePickerMonthYearSelectorList>
                    </DatePickerMonthYearSelectorScroll>
                </DatePickerMonthYearSelectorRoot>
            );
        },
    ),
);

DatePickerMonthYearSelector.displayName =
    DATE_PICKER_MONTH_YEAR_SELECTOR_CLASS_PREFIX;
