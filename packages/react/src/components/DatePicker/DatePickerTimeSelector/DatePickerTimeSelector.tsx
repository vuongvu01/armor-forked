import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../../styling';
import { useDatePickerTimeSelectorClassNames } from './utils/useDatePickerTimeSelectorClassNames';
import { useDatePickerTimeSelector } from './utils/useDatePickerTimeSelector';
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

        const { rootProps } = useDatePickerTimeSelector(props, ref);

        return (
            <DatePickerTimeSelectorRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerTimeSelectorClock theme={theme}>
                    <DatePickerTimeSelectorInput value={12} theme={theme} /> :{' '}
                    <DatePickerTimeSelectorInput value={59} theme={theme} />
                </DatePickerTimeSelectorClock>
                <DatePickerTimeSelectorDayPeriodSelector>
                    <DatePickerTimeSelectorButton
                        theme={theme}
                        className="DatePickerTimeSelector-Button"
                        selected
                    >
                        AM
                    </DatePickerTimeSelectorButton>
                    <DatePickerTimeSelectorButton
                        theme={theme}
                        className="DatePickerTimeSelector-Button"
                    >
                        PM
                    </DatePickerTimeSelectorButton>
                </DatePickerTimeSelectorDayPeriodSelector>
            </DatePickerTimeSelectorRoot>
        );
    },
);

DatePickerTimeSelector.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
DatePickerTimeSelector.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
