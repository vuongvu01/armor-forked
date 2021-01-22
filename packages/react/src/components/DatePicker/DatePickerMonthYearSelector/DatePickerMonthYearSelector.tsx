import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../../styling';
import { useDatePickerMonthYearSelectorClassNames } from './utils/useDatePickerMonthYearSelectorClassNames';
import { useDatePickerMonthYearSelector } from './utils/useDatePickerMonthYearSelector';
import {
    DatePickerMonthYearSelectorRoot,
    DatePickerMonthYearSelectorList,
    DatePickerMonthYearSelectorYear,
    DatePickerMonthYearSelectorYearTitle,
    DatePickerMonthYearSelectorMonthList,
    DatePickerMonthYearSelectorMonth,
} from './style';
import { DatePickerMonthYearSelectorPropsType } from './type';
import { DATE_PICKER_MONTH_YEAR_SELECTOR_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';

export const DatePickerMonthYearSelector: FunctionComponent<DatePickerMonthYearSelectorPropsType> = forwardRef(
    function DatePickerMonthYearSelector({ className, ...props }, ref) {
        const theme = useComponentTheme(
            DATE_PICKER_MONTH_YEAR_SELECTOR_CLASS_PREFIX,
        );
        const classNameComponents = useDatePickerMonthYearSelectorClassNames(
            DATE_PICKER_MONTH_YEAR_SELECTOR_CLASS_PREFIX,
            className,
        );

        const { rootProps, months } = useDatePickerMonthYearSelector(
            props,
            ref,
        );

        return (
            <DatePickerMonthYearSelectorRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerMonthYearSelectorList theme={theme} className="ff">
                    <DatePickerMonthYearSelectorYear
                        theme={theme}
                        className="ff"
                    >
                        <DatePickerMonthYearSelectorYearTitle
                            theme={theme}
                            className="ff"
                        >
                            2021
                        </DatePickerMonthYearSelectorYearTitle>
                        <DatePickerMonthYearSelectorMonthList
                            theme={theme}
                            className="ff"
                        >
                            {months.map(month => (
                                <DatePickerMonthYearSelectorMonth
                                    theme={theme}
                                    className="ff"
                                    key={month}
                                >
                                    {month}
                                </DatePickerMonthYearSelectorMonth>
                            ))}
                        </DatePickerMonthYearSelectorMonthList>
                    </DatePickerMonthYearSelectorYear>

                    <DatePickerMonthYearSelectorYear
                        theme={theme}
                        className="ff"
                    >
                        <DatePickerMonthYearSelectorYearTitle
                            theme={theme}
                            className="ff"
                        >
                            2021
                        </DatePickerMonthYearSelectorYearTitle>
                    </DatePickerMonthYearSelectorYear>
                </DatePickerMonthYearSelectorList>
            </DatePickerMonthYearSelectorRoot>
        );
    },
);

DatePickerMonthYearSelector.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
DatePickerMonthYearSelector.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
