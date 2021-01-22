import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@deliveryhero/armor-icons';

import { useDatePickerTopBarClassNames } from './utils/useDatePickerTopBarClassNames';
import { useDatePickerTopBar } from './utils/useDatePickerTopBar';
import {
    DatePickerTopBarRoot,
    DatePickerMonthNavigation,
    DatePickerMonthNavigationButtonBackward,
    DatePickerMonthNavigationButtonForward,
    DatePickerMonthYearSelectorToggle,
} from './style';
import { DatePickerTopBarPropsType } from './type';
import { DATE_PICKER_TOP_BAR_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';

export const DatePickerTopBar: FunctionComponent<DatePickerTopBarPropsType> = forwardRef(
    function DatePickerTopBar({ className, ...props }, ref) {
        const theme = useComponentTheme(DATE_PICKER_TOP_BAR_CLASS_PREFIX);
        const classNameComponents = useDatePickerTopBarClassNames(
            DATE_PICKER_TOP_BAR_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            monthYearSelectorToggleProps,
            monthNavigationButtonBackwardProps,
            monthNavigationButtonForwardProps,
        } = useDatePickerTopBar(props, ref);

        return (
            <DatePickerTopBarRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerMonthYearSelectorToggle
                    {...monthYearSelectorToggleProps}
                    theme={theme}
                    className="DatePicker-MonthYearSelectorToggle"
                >
                    April 2020
                </DatePickerMonthYearSelectorToggle>
                <DatePickerMonthNavigation>
                    <DatePickerMonthNavigationButtonBackward
                        {...monthNavigationButtonBackwardProps}
                        theme={theme}
                        className="DatePicker-MonthNavigationButtonBackward"
                    >
                        <ArrowRightIcon medium />
                    </DatePickerMonthNavigationButtonBackward>
                    <DatePickerMonthNavigationButtonForward
                        {...monthNavigationButtonForwardProps}
                        theme={theme}
                        className="DatePicker-MonthNavigationButtonForward"
                    >
                        <ArrowRightIcon medium theme={theme} />
                    </DatePickerMonthNavigationButtonForward>
                </DatePickerMonthNavigation>
            </DatePickerTopBarRoot>
        );
    },
);

DatePickerTopBar.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
DatePickerTopBar.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
