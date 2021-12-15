import React, { forwardRef } from 'react';
import { PortalToBody, useComponentTheme } from '@deliveryhero/armor-system';

import { useDatePickerClassNames } from '../hooks/useDatePickerClassNames';
import { useDateRangePicker } from './hooks/useDateRangePicker';
import { DateRangePickerRoot } from './style';
import {
    DatePickerInput,
    DatePickerInputIcon,
    DatePickerDropdown,
    DatePickerDropdownArrow,
} from '../style';
import { DateRangePickerPropsType } from './type';
import { DATE_RANGE_PICKER_CLASS_PREFIX } from '../constants';
import { DatePickerActionBar } from '../DatePickerActionBar';
import { DatePickerMonthYearSelector } from '../DatePickerMonthYearSelector';
import { DatePickerDaySelector } from '../DatePickerDaySelector';
import { DatePickerTopBar } from '../DatePickerTopBar';
import { DatePickerTimeSelector } from '../DatePickerTimeSelector';

/**
 * @armor-docs-component
 */
export const DateRangePicker = forwardRef<
    HTMLDivElement,
    DateRangePickerPropsType
>(function DateRangePicker({ className, ...props }, ref) {
    const theme = useComponentTheme(DATE_RANGE_PICKER_CLASS_PREFIX);

    const classNameComponents = useDatePickerClassNames(
        DATE_RANGE_PICKER_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        inputProps,
        portalProps,
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
    } = useDateRangePicker(props, ref);

    return (
        <DateRangePickerRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            <DatePickerInput
                {...inputProps}
                theme={theme}
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
                            <DatePickerTimeSelector {...timeSelectorProps} />
                        )}
                        {showActions && (
                            <DatePickerActionBar {...actionBarProps} />
                        )}

                        <DatePickerDropdownArrow
                            {...arrowProps}
                            theme={theme}
                        />
                    </DatePickerDropdown>
                </PortalToBody>
            )}
        </DateRangePickerRoot>
    );
});

DateRangePicker.defaultProps = {};

/** prop-types are required here for run-time checks */
DateRangePicker.propTypes = {};
