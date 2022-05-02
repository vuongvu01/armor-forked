import React, { forwardRef, memo } from 'react';

import { useDatePickerActionBarClassNames } from './hooks/useDatePickerActionBarClassNames';
import { useDatePickerActionBar } from './hooks/useDatePickerActionBar';
import { DatePickerActionBarRoot, DatePickerActionBarActions } from './style';
import { DatePickerActionBarPropsType } from './type';
import { DATE_PICKER_ACTION_BAR_CLASS_PREFIX } from './constants';
import { Button } from '../../Button';

/**
 * @internal
 */
export const DatePickerActionBar = memo(
    forwardRef<HTMLDivElement, DatePickerActionBarPropsType>(
        function DatePickerActionBar({ className, ...props }, ref) {
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
                    className={classNameComponents.Root}
                >
                    {showBar && (
                        <DatePickerActionBarActions
                            className={classNameComponents.Actions}
                        >
                            {showClearSelectionButton && (
                                <Button
                                    className={
                                        classNameComponents.ActionBarButton
                                    }
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
                                    className={
                                        classNameComponents.ActionBarButton
                                    }
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
        },
    ),
);

DatePickerActionBar.displayName = DATE_PICKER_ACTION_BAR_CLASS_PREFIX;
