import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useDatePickerActionBarClassNames } from './hooks/useDatePickerActionBarClassNames';
import { useDatePickerActionBar } from './hooks/useDatePickerActionBar';
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

        const {
            rootProps,
            cancelButtonProps,
            applyButtonProps,
        } = useDatePickerActionBar(props, ref);

        return (
            <DatePickerActionBarRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <DatePickerActionBarButton
                    {...cancelButtonProps}
                    marginRight={2}
                    theme={theme}
                    className={classNameComponents.ActionBarButton}
                >
                    Cancel
                </DatePickerActionBarButton>
                <DatePickerActionBarButton
                    {...applyButtonProps}
                    theme={theme}
                    className={classNameComponents.ActionBarButton}
                >
                    Ok
                </DatePickerActionBarButton>
            </DatePickerActionBarRoot>
        );
    },
);

DatePickerActionBar.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerActionBar.propTypes = {};
