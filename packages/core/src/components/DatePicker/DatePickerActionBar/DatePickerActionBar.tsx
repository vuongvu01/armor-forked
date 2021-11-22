import React, { forwardRef } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useDatePickerActionBarClassNames } from './hooks/useDatePickerActionBarClassNames';
import { useDatePickerActionBar } from './hooks/useDatePickerActionBar';
import { DatePickerActionBarRoot, DatePickerActionBarActions } from './style';
import { DatePickerActionBarPropsType } from './type';
import { DATE_PICKER_ACTION_BAR_CLASS_PREFIX } from './constants';
import { Button } from '../../Button';

/**
 * @internal
 */
export const DatePickerActionBar = forwardRef<
    HTMLDivElement,
    DatePickerActionBarPropsType
>(function DatePickerActionBar({ className, ...props }, ref) {
    const theme = useComponentTheme(DATE_PICKER_ACTION_BAR_CLASS_PREFIX);
    const classNameComponents = useDatePickerActionBarClassNames(
        DATE_PICKER_ACTION_BAR_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        applyButtonProps,
        customActions,
        showApplyButton,
    } = useDatePickerActionBar(props, ref);

    return (
        <DatePickerActionBarRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            {showApplyButton && (
                <>
                    <DatePickerActionBarActions
                        theme={theme}
                        className={classNameComponents.Actions}
                    >
                        {customActions}
                    </DatePickerActionBarActions>
                    <Button
                        {...applyButtonProps}
                        className={classNameComponents.ActionBarButton}
                        primary
                    >
                        Apply
                    </Button>
                </>
            )}
            {!showApplyButton && customActions}
        </DatePickerActionBarRoot>
    );
});

DatePickerActionBar.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerActionBar.propTypes = {};
