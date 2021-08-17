import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

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
import { useComponentTheme } from '../../../utils/hooks';

/**
 * @internal
 */
export const DatePickerMonthYearSelector = forwardRef<
    HTMLDivElement,
    DatePickerMonthYearSelectorPropsType
>(function DatePickerMonthYearSelector({ className, ...props }, ref) {
    const theme = useComponentTheme(
        DATE_PICKER_MONTH_YEAR_SELECTOR_CLASS_PREFIX,
    );
    const classNameComponents = useDatePickerMonthYearSelectorClassNames(
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
            theme={theme}
            className={classNameComponents.Root}
        >
            <DatePickerMonthYearSelectorScroll
                {...scrollProps}
                theme={theme}
                className={classNameComponents.Scroll}
            >
                <DatePickerMonthYearSelectorList
                    {...listProps}
                    theme={theme}
                    className={classNameComponents.List}
                >
                    {yearRange.map(year => (
                        <DatePickerMonthYearSelectorYear
                            theme={theme}
                            className={classNameComponents.Year}
                            key={year}
                        >
                            <DatePickerMonthYearSelectorYearTitle
                                {...yearTitleProps}
                                theme={theme}
                                className={classNameComponents.YearTitle}
                                data-year={year}
                            >
                                {year}
                            </DatePickerMonthYearSelectorYearTitle>
                            {openYear === year && (
                                <DatePickerMonthYearSelectorMonthList
                                    theme={theme}
                                    className={classNameComponents.MonthList}
                                >
                                    {months.map((monthName, monthNumber) => (
                                        <DatePickerMonthYearSelectorMonth
                                            {...monthProps}
                                            theme={theme}
                                            className={
                                                classNameComponents.Month
                                            }
                                            key={monthName}
                                            data-month={monthNumber}
                                            data-year={year}
                                            selected={
                                                monthNumber ===
                                                    displayedMonth &&
                                                year === displayedYear
                                            }
                                        >
                                            {monthName}
                                        </DatePickerMonthYearSelectorMonth>
                                    ))}
                                </DatePickerMonthYearSelectorMonthList>
                            )}
                        </DatePickerMonthYearSelectorYear>
                    ))}
                </DatePickerMonthYearSelectorList>
            </DatePickerMonthYearSelectorScroll>
        </DatePickerMonthYearSelectorRoot>
    );
});

DatePickerMonthYearSelector.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerMonthYearSelector.propTypes = {};
