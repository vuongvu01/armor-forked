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
        showBar,
        getApplyButtonProps,
        showApplyButton,
        showClearSelectionButton,
        showTodayButtonRegular,
        showTodayButtonWide,
        getClearSelectionButtonProps,
        getTodayButtonProps,
    } = useDatePickerActionBar(props, ref);

    return (
        <DatePickerActionBarRoot
            {...rootProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            {showBar && (
                <DatePickerActionBarActions
                    theme={theme}
                    className={classNameComponents.Actions}
                >
                    {showClearSelectionButton && (
                        <Button
                            className={classNameComponents.ActionBarButton}
                            tertiary
                            danger
                            paddingX={1}
                            {...getClearSelectionButtonProps()}
                        >
                            Clear
                        </Button>
                    )}
                    {showTodayButtonRegular && (
                        <Button
                            className={classNameComponents.ActionBarButton}
                            tertiary
                            paddingX={1}
                            {...getTodayButtonProps()}
                        >
                            Today
                        </Button>
                    )}
                </DatePickerActionBarActions>
            )}
            {showApplyButton && (
                <Button
                    {...getApplyButtonProps()}
                    className={classNameComponents.ActionBarButtonApply}
                    primary
                >
                    Apply
                </Button>
            )}
            {showTodayButtonWide && (
                <Button
                    className={classNameComponents.ActionBarButton}
                    secondary
                    wide
                    {...getTodayButtonProps()}
                >
                    Today
                </Button>
            )}
        </DatePickerActionBarRoot>
    );
});

DatePickerActionBar.defaultProps = {};

/** prop-types are required here for run-time checks */
DatePickerActionBar.propTypes = {};
