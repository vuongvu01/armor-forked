import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../styling';
import { useDatePickerClassNames } from './utils/useDatePickerClassNames';
import { useDatePicker } from './utils/useDatePicker';
import {
    DatePickerRoot,
    DatePickerInput,
    DatePickerInputIcon,
    DatePickerDropdown,
    DatePickerDropdownArrow,
} from './style';
import { DatePickerPropsType } from './type';
import { DATE_PICKER_CLASS_PREFIX } from './constants';
import { DatePickerTimeSelector } from './DatePickerTimeSelector';
import { DatePickerActionBar } from './DatePickerActionBar';
import { DatePickerMonthYearSelector } from './DatePickerMonthYearSelector';
import { DatePickerDaySelector } from './DatePickerDaySelector';
import { useComponentTheme } from '../../utils/hooks';

export const DatePicker: FunctionComponent<DatePickerPropsType> = forwardRef(
    function DatePicker({ className, ...props }, ref) {
        const theme = useComponentTheme(DATE_PICKER_CLASS_PREFIX);

        const classNameComponents = useDatePickerClassNames(
            DATE_PICKER_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            inputProps,
            dropdownProps,
            arrowProps,
            daySelectorProps,

            displayMonthYearSelector,
        } = useDatePicker(props, ref);

        return (
            <DatePickerRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerInput
                    {...inputProps}
                    theme={theme}
                    className="DatePicker-Input"
                    after={<DatePickerInputIcon theme={theme} />}
                />
                <DatePickerDropdown
                    {...dropdownProps}
                    theme={theme}
                    className="DatePicker-Dropdown"
                >
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

DatePicker.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
DatePicker.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
