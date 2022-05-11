import React, { forwardRef, memo } from 'react';

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
export const DatePickerDaySelector = memo(
    forwardRef<HTMLDivElement, DatePickerDaySelectorPropsType>(
        function DatePickerDaySelector({ className, ...props }, ref) {
            const classNameComponents = useDatePickerDaySelectorClassNames(
                DATE_PICKER_DAY_SELECTOR_CLASS_PREFIX,
                className,
            );

            const { rootProps, weekDays, dayMatrix, getDayProps } =
                useDatePickerDaySelector(props, ref);

            return (
                <DatePickerDaySelectorRoot
                    {...rootProps}
                    className={classNameComponents.Root}
                >
                    <DatePickerDaySelectorWeek
                        className={classNameComponents.Week}
                    >
                        {weekDays.map((weekDay) => (
                            <DatePickerDaySelectorWeekDay
                                key={weekDay.value}
                                className={classNameComponents.WeekDay}
                            >
                                {weekDay.label}
                            </DatePickerDaySelectorWeekDay>
                        ))}
                    </DatePickerDaySelectorWeek>
                    <DatePickerDaySelectorDays
                        className={classNameComponents.Days}
                    >
                        {dayMatrix.map((day) => (
                            <DatePickerDaySelectorDay
                                key={day.id}
                                {...getDayProps(day, classNameComponents.Day)}
                            >
                                <DatePickerDaySelectorDayPadding
                                    {...day.paddingProps}
                                    left
                                    className={
                                        classNameComponents.DayPaddingLeft
                                    }
                                />
                                <DatePickerDaySelectorDayButton
                                    {...day.buttonProps}
                                    className={classNameComponents.DayButton}
                                >
                                    {day.day}
                                </DatePickerDaySelectorDayButton>
                                <DatePickerDaySelectorDayPadding
                                    {...day.paddingProps}
                                    right
                                    className={
                                        classNameComponents.DayPaddingRight
                                    }
                                />
                            </DatePickerDaySelectorDay>
                        ))}
                    </DatePickerDaySelectorDays>
                </DatePickerDaySelectorRoot>
            );
        },
    ),
);

DatePickerDaySelector.displayName = DATE_PICKER_DAY_SELECTOR_CLASS_PREFIX;
