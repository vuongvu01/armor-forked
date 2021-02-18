import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { PortalToBody } from '../../system/util/PortalToBody';

import { useDatePickerClassNames } from './hooks/useDatePickerClassNames';
import { useDatePicker } from './hooks/useDatePicker';
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
import { DatePickerTopBar } from './DatePickerTopBar';
import { useComponentTheme } from '../../utils/hooks';

export const DatePicker: FunctionComponent<DatePickerPropsType> = forwardRef(
    function DatePicker({ className, ...props }, ref) {
        const theme = useComponentTheme(DATE_PICKER_CLASS_PREFIX);

        const classNameComponents = useDatePickerClassNames(
            DATE_PICKER_CLASS_PREFIX,
            className,
        );

        const {
            portalProps,
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
        } = useDatePicker(props, ref);

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
                    <PortalToBody {...portalProps}>
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
                                <DatePickerTimeSelector
                                    {...timeSelectorProps}
                                />
                            )}
                            {enableActionButtons && (
                                <DatePickerActionBar {...actionBarProps} />
                            )}

                            <DatePickerDropdownArrow
                                {...arrowProps}
                                theme={theme}
                            />
                        </DatePickerDropdown>
                    </PortalToBody>
                )}
            </DatePickerRoot>
        );
    },
);

DatePicker.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePicker.propTypes = {};
