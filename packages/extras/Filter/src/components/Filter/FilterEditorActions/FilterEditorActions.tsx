import React, { forwardRef, memo } from 'react';

import { Button } from '@deliveryhero/armor';
import { useFilterEditorActionsClassNames } from './hooks/useFilterEditorActionsClassNames';
import { useFilterEditorActions } from './hooks/useFilterEditorActions';
import { FilterEditorActionsRoot } from './style';
import { FilterEditorActionsPropsType } from './type';
import { FILTER_EDITOR_ACTIONS_CLASS_PREFIX } from './constants';

export const FilterEditorActions = forwardRef<
    HTMLDivElement,
    FilterEditorActionsPropsType
>(function FilterEditorActions({ className, ...props }, ref) {
    const classNames = useFilterEditorActionsClassNames(
        FILTER_EDITOR_ACTIONS_CLASS_PREFIX,
        className,
    );

    const { rootProps, showCloseButton, getCloseButtonProps } =
        useFilterEditorActions<HTMLDivElement>(props, ref);

    return (
        <FilterEditorActionsRoot {...rootProps} className={classNames.Root}>
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
            <Button type="submit" wide className={classNames.ApplyButton}>
                Apply
            </Button>
        </FilterEditorActionsRoot>
    );
});

export const MemoizedFilterEditorActions = memo(FilterEditorActions);
