import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { useComponentTheme, PortalToBody } from '@deliveryhero/armor-system';

import { useDatePickerClassNames } from '../hooks/useDatePickerClassNames';
import { useDatePicker } from './hooks/useDatePicker';
import { DatePickerRoot } from './style';
import {
    DatePickerInput,
    DatePickerInputIcon,
    DatePickerDropdown,
    DatePickerDropdownArrow,
} from '../style';
import { DatePickerPropsType } from './type';
import { DATE_PICKER_CLASS_PREFIX } from '../constants';
import { DatePickerTimeSelector } from '../DatePickerTimeSelector';
import { DatePickerActionBar } from '../DatePickerActionBar';
import { DatePickerMonthYearSelector } from '../DatePickerMonthYearSelector';
import { DatePickerDaySelector } from '../DatePickerDaySelector';
import { DatePickerTopBar } from '../DatePickerTopBar';
import { Button } from '../../Button';

/**
 * @armor-docs-component
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerPropsType>(
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

            showActions,
            showTimePicker,
            showTodayButton,
            getTodayButtonProps,
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
                            theme={theme}
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
                            {showTimePicker && (
                                <DatePickerTimeSelector
                                    {...timeSelectorProps}
                                />
                            )}
                            {showActions && (
                                <DatePickerActionBar
                                    {...actionBarProps}
                                    customActions={
                                        <>
                                            {showTodayButton && (
                                                <Button
                                                    {...getTodayButtonProps()}
                                                >
                                                    Today
                                                </Button>
                                            )}
                                        </>
                                    }
                                />
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
