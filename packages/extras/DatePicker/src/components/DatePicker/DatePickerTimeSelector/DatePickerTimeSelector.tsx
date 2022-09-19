import React, { forwardRef, memo } from 'react';
import { TimeSeparatorIcon } from '@deliveryhero/armor-icons';

import { ContentSwitcher, ContentSwitcherControl } from '@deliveryhero/armor';
import { useDatePickerTimeSelectorClassNames } from './hooks/useDatePickerTimeSelectorClassNames';
import { useDatePickerTimeSelector } from './hooks/useDatePickerTimeSelector';
import {
    DatePickerTimeSelectorClock,
    DatePickerTimeSelectorDayPeriodSelector,
    DatePickerTimeSelectorInput,
    DatePickerTimeSelectorRoot,
} from './style';
import { DatePickerTimeSelectorPropsType } from './type';
import {
    DATE_PICKER_TIME_SELECTOR_CLASS_PREFIX,
    DATE_PICKER_TIME_SELECTOR_MODE_AM,
    DATE_PICKER_TIME_SELECTOR_MODE_PM,
} from './constants';

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
                buttonDayPeriodProps,
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
                        <ContentSwitcher {...buttonDayPeriodProps}>
                            <ContentSwitcherControl
                                switchName={DATE_PICKER_TIME_SELECTOR_MODE_AM}
                            >
                                {DATE_PICKER_TIME_SELECTOR_MODE_AM.toUpperCase()}
                            </ContentSwitcherControl>
                            <ContentSwitcherControl
                                switchName={DATE_PICKER_TIME_SELECTOR_MODE_PM}
                            >
                                {DATE_PICKER_TIME_SELECTOR_MODE_PM.toUpperCase()}
                            </ContentSwitcherControl>
                        </ContentSwitcher>
                    </DatePickerTimeSelectorDayPeriodSelector>
                </DatePickerTimeSelectorRoot>
            );
        },
    ),
);

DatePickerTimeSelector.displayName = DATE_PICKER_TIME_SELECTOR_CLASS_PREFIX;
