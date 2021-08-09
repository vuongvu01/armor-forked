import React, { forwardRef } from 'react';

import { useFilterEditorActionsClassNames } from './hooks/useFilterEditorActionsClassNames';
import { useFilterEditorActions } from './hooks/useFilterEditorActions';
import { FilterEditorActionsRoot } from './style';
import { FilterEditorActionsPropsType } from './type';
import { FILTER_EDITOR_ACTIONS_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';
import { Button } from '../../Button';

export const FilterEditorActions = forwardRef<
    HTMLDivElement,
    FilterEditorActionsPropsType
>(function FilterEditorActions({ className, ...props }, ref) {
    const theme = useComponentTheme(FILTER_EDITOR_ACTIONS_CLASS_PREFIX);
    const classNames = useFilterEditorActionsClassNames(
        FILTER_EDITOR_ACTIONS_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        showCloseButton,
        getCloseButtonProps,
        applyFilterButtonProps,
    } = useFilterEditorActions<HTMLDivElement>(props, ref);

    return (
        <FilterEditorActionsRoot
            {...rootProps}
            theme={theme}
            className={classNames.Root}
        >
            {showCloseButton && (
                <Button
                    secondary
                    marginRight={4}
                    {...getCloseButtonProps()}
                    className={classNames.CloseButton}
                >
                    Close
                </Button>
            )}
            <Button
                wide
                {...applyFilterButtonProps}
                className={classNames.ApplyButton}
            >
                Apply
            </Button>
        </FilterEditorActionsRoot>
    );
});

FilterEditorActions.defaultProps = {};
