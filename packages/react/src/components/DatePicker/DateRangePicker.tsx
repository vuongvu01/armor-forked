import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../styling';
import { useDatePickerClassNames } from './utils/useDatePickerClassNames';
import { useDateRangePicker } from './utils/useDateRangePicker';
import {
    DatePickerRoot,
    DatePickerInput,
    DatePickerInputIcon,
    DatePickerDropdown,
    DatePickerDropdownArrow,
} from './style';
import { DateRangePickerPropsType } from './type';
import { DATE_RANGE_PICKER_CLASS_PREFIX } from './constants';
import { DatePickerTimeSelector } from './DatePickerTimeSelector';
import { DatePickerActionBar } from './DatePickerActionBar';
import { DatePickerMonthYearSelector } from './DatePickerMonthYearSelector';
import { DatePickerDaySelector } from './DatePickerDaySelector';
import { DatePickerTopBar } from './DatePickerTopBar';

export const DateRangePicker: FunctionComponent<DateRangePickerPropsType> = forwardRef(
    function DateRangePicker({ className, ...props }, ref) {
        const theme = useTheme().armor;
        const classNameComponents = useDatePickerClassNames(
            DATE_RANGE_PICKER_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            inputProps,
            dropdownProps,
            arrowProps,
            topBarProps,
            daySelectorProps,

            displayMonthYearSelector,
        } = useDateRangePicker(props, ref);

        return (
            <DatePickerRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerInput
                    {...inputProps}
                    className="DatePicker-Input"
                    after={<DatePickerInputIcon theme={theme} />}
                />
                <DatePickerDropdown
                    {...dropdownProps}
                    className="DatePicker-Dropdown"
                >
                    <DatePickerTopBar {...topBarProps} />
                    {displayMonthYearSelector && (
                        <DatePickerMonthYearSelector />
                    )}
                    {!displayMonthYearSelector && (
                        <DatePickerDaySelector {...daySelectorProps} />
                    )}
                    <DatePickerTimeSelector />
                    <DatePickerActionBar />

                    <DatePickerDropdownArrow {...arrowProps} theme={theme} />
                </DatePickerDropdown>
            </DatePickerRoot>
        );
    },
);

DateRangePicker.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
DateRangePicker.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
