import React, { forwardRef, memo } from 'react';
import { PortalToBody } from '@deliveryhero/armor-system';

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
 * # DateRangePicker
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/489489-date-range-picker/b/65de07)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { useState } from 'react';
 * import { DateRangePicker } from '@deliveryhero/armor';
 *
 * const [value, setValue] = useState<[Date, Date]>();
 *
 * <DateRangePicker dateValue={value} onDateValueChange={setValue} />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const DateRangePicker = forwardRef<
    HTMLDivElement,
    DateRangePickerPropsType
>(function DateRangePicker({ className, ...props }, ref) {
    const classNameComponents = useDatePickerClassNames(
        DATE_RANGE_PICKER_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        inputProps,
        inputMaskProps,
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
        showMaskedInput,
    } = useDateRangePicker(props, ref);

    return (
        <DateRangePickerRoot
            {...rootProps}
            className={classNameComponents.Root}
        >
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
                            <DatePickerTimeSelector {...timeSelectorProps} />
                        )}
                        {showActions && (
                            <DatePickerActionBar {...actionBarProps} />
                        )}

                        <DatePickerDropdownArrow {...arrowProps} />
                    </DatePickerDropdown>
                </PortalToBody>
            )}
        </DateRangePickerRoot>
    );
});

DateRangePicker.defaultProps = {};

/** prop-types are required here for run-time checks */
DateRangePicker.propTypes = {};

export const MemoizedDateRangePicker = memo(DateRangePicker);
