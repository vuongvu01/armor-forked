import React, { forwardRef, memo } from 'react';
import { PortalToBody } from '@deliveryhero/armor-system';

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

/**
 * # DatePicker
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/0591e9-date-picker/b/35ef35)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { useState } from 'react';
 * import { DatePicker } from '@deliveryhero/armor';
 *
 * const [value, setValue] = useState<Date>();
 *
 * <DatePicker dateValue={value} onDateValueChange={setValue} />
 * ```
 * ***
 *
 * @armor-docs-component
 *
 * @deprecated
 * Please import this component from "@deliveryhero/armor-datepicker".
 * In armor release on 10.08.2021 this component will be removed from "@deliveryhero/armor".
 * This is being done to decrease the size of "@deliveryhero/armor" package.
 * Refer to LD-749 Jira for more details regarding this change.
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerPropsType>(
    function DatePicker({ className, ...props }, ref) {
        const classNameComponents = useDatePickerClassNames(
            DATE_PICKER_CLASS_PREFIX,
            className,
        );

        const {
            portalProps,
            rootProps,
            inputProps,
            inputMaskProps,
            showMaskedInput,
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
        } = useDatePicker(props, ref);

        return (
            <DatePickerRoot {...rootProps} className={classNameComponents.Root}>
                <DatePickerInput
                    {...(showMaskedInput ? inputMaskProps : inputProps)}
                    type="text"
                    className={classNameComponents.Input}
                    after={<DatePickerInputIcon />}
                    ref={inputProps.ref}
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
                            {showTimePicker && (
                                <DatePickerTimeSelector
                                    {...timeSelectorProps}
                                />
                            )}
                            {showActions && (
                                <DatePickerActionBar {...actionBarProps} />
                            )}
                            <DatePickerDropdownArrow {...arrowProps} />
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

export const MemoizedDatePicker = memo(DatePicker);
