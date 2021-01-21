import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useTheme } from '../../../styling';
import { useDatePickerDaySelectorClassNames } from './utils/useDatePickerDaySelectorClassNames';
import { useDatePickerDaySelector } from './utils/useDatePickerDaySelector';
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

export const DatePickerDaySelector: FunctionComponent<DatePickerDaySelectorPropsType> = forwardRef(
    function DatePickerDaySelector({ className, ...props }, ref) {
        const theme = useComponentTheme(DATE_PICKER_DAY_SELECTOR_CLASS_PREFIX);
        const classNameComponents = useDatePickerDaySelectorClassNames(
            DATE_PICKER_DAY_SELECTOR_CLASS_PREFIX,
            className,
        );

        const { rootProps, weekDays, dayMatrix } = useDatePickerDaySelector(
            props,
            ref,
        );

        return (
            <DatePickerDaySelectorRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerDaySelectorWeek theme={theme}>
                    {weekDays.map(weekDay => (
                        <DatePickerDaySelectorWeekDay
                            key={weekDay.value}
                            theme={theme}
                        >
                            {weekDay.label}
                        </DatePickerDaySelectorWeekDay>
                    ))}
                </DatePickerDaySelectorWeek>
                <DatePickerDaySelectorDays theme={theme}>
                    {dayMatrix.map(day => (
                        <DatePickerDaySelectorDay key={day.id} theme={theme}>
                            <DatePickerDaySelectorDayPadding
                                {...day}
                                left
                                theme={theme}
                                className="foo"
                            />
                            <DatePickerDaySelectorDayButton
                                {...day}
                                theme={theme}
                                className="foo"
                            >
                                {day.number}
                            </DatePickerDaySelectorDayButton>
                            <DatePickerDaySelectorDayPadding
                                {...day}
                                right
                                theme={theme}
                                className="foo"
                            />
                        </DatePickerDaySelectorDay>
                    ))}
                </DatePickerDaySelectorDays>
            </DatePickerDaySelectorRoot>
        );
    },
);

DatePickerDaySelector.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
DatePickerDaySelector.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
