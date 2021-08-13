import React, { forwardRef } from 'react';
import { TimeSeparatorIcon } from '@deliveryhero/armor-icons';

import { useDatePickerTimeSelectorClassNames } from './hooks/useDatePickerTimeSelectorClassNames';
import { useDatePickerTimeSelector } from './hooks/useDatePickerTimeSelector';
import {
    DatePickerTimeSelectorButton,
    DatePickerTimeSelectorClock,
    DatePickerTimeSelectorDayPeriodSelector,
    DatePickerTimeSelectorInput,
    DatePickerTimeSelectorRoot,
} from './style';
import { DatePickerTimeSelectorPropsType } from './type';
import { DATE_PICKER_TIME_SELECTOR_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';

/**
 * @internal
 */
export const DatePickerTimeSelector = forwardRef<
    HTMLDivElement,
    DatePickerTimeSelectorPropsType
>(function DatePickerTimeSelector({ className, ...props }, ref) {
    const theme = useComponentTheme(DATE_PICKER_TIME_SELECTOR_CLASS_PREFIX);
    const classNameComponents = useDatePickerTimeSelectorClassNames(
        DATE_PICKER_TIME_SELECTOR_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        hourInputProps,
        minuteInputProps,
        buttonAMProps,
        buttonPMProps,
    } = useDatePickerTimeSelector(props, ref);

    return (
        <DatePickerTimeSelectorRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            <DatePickerTimeSelectorClock
                theme={theme}
                className={classNameComponents.Clock}
            >
                <DatePickerTimeSelectorInput
                    {...hourInputProps}
                    theme={theme}
                    className={classNameComponents.InputHours}
                />{' '}
                <TimeSeparatorIcon
                    className={classNameComponents.TimeSeparatorIcon}
                />{' '}
                <DatePickerTimeSelectorInput
                    {...minuteInputProps}
                    theme={theme}
                    className={classNameComponents.InputMinutes}
                />
            </DatePickerTimeSelectorClock>
            <DatePickerTimeSelectorDayPeriodSelector
                theme={theme}
                className={classNameComponents.DayPeriodSelector}
            >
                <DatePickerTimeSelectorButton
                    {...buttonAMProps}
                    theme={theme}
                    className={classNameComponents.ButtonAM}
                >
                    AM
                </DatePickerTimeSelectorButton>
                <DatePickerTimeSelectorButton
                    {...buttonPMProps}
                    theme={theme}
                    className={classNameComponents.ButtonPM}
                >
                    PM
                </DatePickerTimeSelectorButton>
            </DatePickerTimeSelectorDayPeriodSelector>
        </DatePickerTimeSelectorRoot>
    );
});

DatePickerTimeSelector.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerTimeSelector.propTypes = {};
