import React, { FunctionComponent, forwardRef } from 'react';
import { TimeSeparatorIcon } from '@deliveryhero/armor-icons';
import PropTypes from 'prop-types';

import { useDatePickerTimeSelectorClassNames } from './hooks/useDatePickerTimeSelectorClassNames';
import { useDatePickerTimeSelector } from './hooks/useDatePickerTimeSelector';
import {
    DatePickerTimeSelectorRoot,
    DatePickerTimeSelectorClock,
    DatePickerTimeSelectorInput,
    DatePickerTimeSelectorDayPeriodSelector,
    DatePickerTimeSelectorButton,
} from './style';
import { DatePickerTimeSelectorPropsType } from './type';
import { DATE_PICKER_TIME_SELECTOR_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';

export const DatePickerTimeSelector: FunctionComponent<DatePickerTimeSelectorPropsType> = forwardRef(
    function DatePickerTimeSelector({ className, ...props }, ref) {
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
                <DatePickerTimeSelectorClock theme={theme}>
                    <DatePickerTimeSelectorInput
                        {...hourInputProps}
                        className={classNameComponents.Input}
                    />{' '}
                    <TimeSeparatorIcon
                        className={classNameComponents.TimeSeparatorIcon}
                    />{' '}
                    <DatePickerTimeSelectorInput
                        {...minuteInputProps}
                        className={classNameComponents.Input}
                    />
                </DatePickerTimeSelectorClock>
                <DatePickerTimeSelectorDayPeriodSelector>
                    <DatePickerTimeSelectorButton
                        {...buttonAMProps}
                        theme={theme}
                        className={classNameComponents.Button}
                    >
                        AM
                    </DatePickerTimeSelectorButton>
                    <DatePickerTimeSelectorButton
                        {...buttonPMProps}
                        theme={theme}
                        className={classNameComponents.Button}
                    >
                        PM
                    </DatePickerTimeSelectorButton>
                </DatePickerTimeSelectorDayPeriodSelector>
            </DatePickerTimeSelectorRoot>
        );
    },
);

DatePickerTimeSelector.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerTimeSelector.propTypes = {};
