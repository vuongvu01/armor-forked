import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useDatePickerDaySelectorClassNames } from './hooks/useDatePickerDaySelectorClassNames';
import { useDatePickerDaySelector } from './hooks/useDatePickerDaySelector';
import {
    DatePickerDaySelectorRoot,
    DatePickerDaySelectorWeek,
    DatePickerDaySelectorWeekDay,
    DatePickerDaySelectorDays,
    DatePickerDaySelectorDay,
    DatePickerDaySelectorDayPadding,
    DatePickerDaySelectorDayButton,
} from './style';
import { DatePickerDaySelectorPropsType } from './type';
import { DATE_PICKER_DAY_SELECTOR_CLASS_PREFIX } from './constants';

/**
 * @internal
 */
export const DatePickerDaySelector = forwardRef<
    HTMLDivElement,
    DatePickerDaySelectorPropsType
>(function DatePickerDaySelector({ className, ...props }, ref) {
    const theme = useComponentTheme(DATE_PICKER_DAY_SELECTOR_CLASS_PREFIX);
    const classNameComponents = useDatePickerDaySelectorClassNames(
        DATE_PICKER_DAY_SELECTOR_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        weekDays,
        dayMatrix,
        getDayProps,
    } = useDatePickerDaySelector(props, ref);

    return (
        <DatePickerDaySelectorRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            <DatePickerDaySelectorWeek
                theme={theme}
                className={classNameComponents.Week}
            >
                {weekDays.map(weekDay => (
                    <DatePickerDaySelectorWeekDay
                        key={weekDay.value}
                        theme={theme}
                        className={classNameComponents.WeekDay}
                    >
                        {weekDay.label}
                    </DatePickerDaySelectorWeekDay>
                ))}
            </DatePickerDaySelectorWeek>
            <DatePickerDaySelectorDays
                theme={theme}
                className={classNameComponents.Days}
            >
                {dayMatrix.map(day => (
                    <DatePickerDaySelectorDay
                        key={day.id}
                        {...getDayProps(day, classNameComponents.Day)}
                        theme={theme}
                    >
                        <DatePickerDaySelectorDayPadding
                            {...day.paddingProps}
                            left
                            theme={theme}
                            className={classNameComponents.DayPaddingLeft}
                        />
                        <DatePickerDaySelectorDayButton
                            {...day.buttonProps}
                            theme={theme}
                            className={classNameComponents.DayButton}
                        >
                            {day.day}
                        </DatePickerDaySelectorDayButton>
                        <DatePickerDaySelectorDayPadding
                            {...day.paddingProps}
                            right
                            theme={theme}
                            className={classNameComponents.DayPaddingRight}
                        />
                    </DatePickerDaySelectorDay>
                ))}
            </DatePickerDaySelectorDays>
        </DatePickerDaySelectorRoot>
    );
});

DatePickerDaySelector.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerDaySelector.propTypes = {};
