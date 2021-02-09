import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../styling';
import { useDatePickerClassNames } from './hooks/useDatePickerClassNames';
import { useDateRangePicker } from './hooks/useDateRangePicker';
import {
    DatePickerRoot,
    DatePickerInput,
    DatePickerInputIcon,
    DatePickerDropdown,
    DatePickerDropdownArrow,
} from './style';
import { DateRangePickerPropsType } from './type';
import { DATE_RANGE_PICKER_CLASS_PREFIX } from './constants';
import { DatePickerActionBar } from './DatePickerActionBar';
import { DatePickerMonthYearSelector } from './DatePickerMonthYearSelector';
import { DatePickerDaySelector } from './DatePickerDaySelector';
import { DatePickerTopBar } from './DatePickerTopBar';
import { DatePickerTimeSelector } from './DatePickerTimeSelector';

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
            monthYearSelectorProps,
            actionBarProps,
            timeSelectorProps,

            displayMonthYearSelector,
            open,

            enableActionButtons,
            enableTimePicker,
        } = useDateRangePicker(props, ref);

        return (
            <DatePickerRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerInput
                    {...inputProps}
                    className={classNameComponents.Input}
                    after={<DatePickerInputIcon theme={theme} />}
                />
                {open && (
                    <DatePickerDropdown
                        {...dropdownProps}
                        className={classNameComponents.Dropdown}
                    >
                        <DatePickerTopBar {...topBarProps} />
                        {displayMonthYearSelector && (
                            <DatePickerMonthYearSelector
                                {...monthYearSelectorProps}
                            />
                        )}
                        {!displayMonthYearSelector && (
                            <DatePickerDaySelector {...daySelectorProps} />
                        )}
                        {enableTimePicker && (
                            <DatePickerTimeSelector {...timeSelectorProps} />
                        )}
                        {enableActionButtons && (
                            <DatePickerActionBar {...actionBarProps} />
                        )}

                        <DatePickerDropdownArrow
                            {...arrowProps}
                            theme={theme}
                        />
                    </DatePickerDropdown>
                )}
            </DatePickerRoot>
        );
    },
);

DateRangePicker.defaultProps = {};

/** prop-types are required here for run-time checks */
DateRangePicker.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
