import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../../styling';
import { useDatePickerActionBarClassNames } from './utils/useDatePickerActionBarClassNames';
import { useDatePickerActionBar } from './utils/useDatePickerActionBar';
import { DatePickerActionBarRoot, DatePickerActionBarButton } from './style';
import { DatePickerActionBarPropsType } from './type';
import { DATE_PICKER_ACTION_BAR_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';

export const DatePickerActionBar: FunctionComponent<DatePickerActionBarPropsType> = forwardRef(
    function DatePickerActionBar({ className, ...props }, ref) {
        const theme = useComponentTheme(DATE_PICKER_ACTION_BAR_CLASS_PREFIX);
        const classNameComponents = useDatePickerActionBarClassNames(
            DATE_PICKER_ACTION_BAR_CLASS_PREFIX,
            className,
        );

        const { rootProps } = useDatePickerActionBar(props, ref);

        return (
            <DatePickerActionBarRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerActionBarButton marginRight={2} theme={theme}>
                    Cancel
                </DatePickerActionBarButton>
                <DatePickerActionBarButton theme={theme}>
                    Ok
                </DatePickerActionBarButton>
            </DatePickerActionBarRoot>
        );
    },
);

DatePickerActionBar.defaultProps = {
    // exampleProperty: true,
};

/** prop-types are required here for run-time checks */
DatePickerActionBar.propTypes = {
    /** Example description */
    // exampleProperty: PropTypes.bool,
};
