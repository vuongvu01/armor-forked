import React, { forwardRef, memo } from 'react';
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

/**
 * @internal
 */
export const DatePickerTimeSelector = memo(
    forwardRef<HTMLDivElement, DatePickerTimeSelectorPropsType>(
        function DatePickerTimeSelector({ className, ...props }, ref) {
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
                    className={classNameComponents.Root}
                >
                    <DatePickerTimeSelectorClock
                        className={classNameComponents.Clock}
                    >
                        <DatePickerTimeSelectorInput
                            {...hourInputProps}
                            className={classNameComponents.InputHours}
                        />{' '}
                        <TimeSeparatorIcon
                            small
                            className={classNameComponents.TimeSeparatorIcon}
                        />{' '}
                        <DatePickerTimeSelectorInput
                            {...minuteInputProps}
                            className={classNameComponents.InputMinutes}
                        />
                    </DatePickerTimeSelectorClock>
                    <DatePickerTimeSelectorDayPeriodSelector
                        className={classNameComponents.DayPeriodSelector}
                    >
                        <DatePickerTimeSelectorButton
                            {...buttonAMProps}
                            className={classNameComponents.ButtonAM}
                        >
                            AM
                        </DatePickerTimeSelectorButton>
                        <DatePickerTimeSelectorButton
                            {...buttonPMProps}
                            className={classNameComponents.ButtonPM}
                        >
                            PM
                        </DatePickerTimeSelectorButton>
                    </DatePickerTimeSelectorDayPeriodSelector>
                </DatePickerTimeSelectorRoot>
            );
        },
    ),
);

DatePickerTimeSelector.displayName = DATE_PICKER_TIME_SELECTOR_CLASS_PREFIX;
