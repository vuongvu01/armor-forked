import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@deliveryhero/armor-icons';

import { useDatePickerTopBarClassNames } from './hooks/useDatePickerTopBarClassNames';
import { useDatePickerTopBar } from './hooks/useDatePickerTopBar';
import {
    DatePickerTopBarRoot,
    DatePickerTopBarMonthNavigation,
    DatePickerTopBarMonthNavigationButtonBackward,
    DatePickerTopBarMonthNavigationButtonForward,
    DatePickerTopBarMonthYearSelectorToggle,
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

            year,
            monthName,
        } = useDatePickerTopBar(props, ref);

        return (
            <DatePickerTopBarRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerTopBarMonthYearSelectorToggle
                    {...monthYearSelectorToggleProps}
                    theme={theme}
                    className={classNameComponents.MonthYearSelectorToggle}
                >
                    {monthName} {year}
                </DatePickerTopBarMonthYearSelectorToggle>
                <DatePickerTopBarMonthNavigation
                    theme={theme}
                    className={classNameComponents.MonthNavigation}
                >
                    <DatePickerTopBarMonthNavigationButtonBackward
                        {...monthNavigationButtonBackwardProps}
                        theme={theme}
                        className={
                            classNameComponents.MonthNavigationButtonBackward
                        }
                    >
                        <ArrowRightIcon
                            medium
                            className={classNameComponents.ArrowRightIcon}
                        />
                    </DatePickerTopBarMonthNavigationButtonBackward>
                    <DatePickerTopBarMonthNavigationButtonForward
                        {...monthNavigationButtonForwardProps}
                        theme={theme}
                        className={
                            classNameComponents.MonthNavigationButtonForward
                        }
                    >
                        <ArrowRightIcon
                            medium
                            className={classNameComponents.ArrowRightIcon}
                        />
                    </DatePickerTopBarMonthNavigationButtonForward>
                </DatePickerTopBarMonthNavigation>
            </DatePickerTopBarRoot>
        );
    },
);

DatePickerTopBar.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerTopBar.propTypes = {};
