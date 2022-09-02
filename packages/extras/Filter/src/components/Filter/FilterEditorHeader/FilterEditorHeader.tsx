import React, { forwardRef, memo } from 'react';

import { Typography, Link } from '@deliveryhero/armor';
import { useFilterEditorHeaderClassNames } from './hooks/useFilterEditorHeaderClassNames';
import { useFilterEditorHeader } from './hooks/useFilterEditorHeader';
import { FilterEditorHeaderRoot } from './style';
import { FilterEditorHeaderPropsType } from './type';
import { FILTER_EDITOR_HEADER_CLASS_PREFIX } from './constants';

export const FilterEditorHeader = forwardRef<
    HTMLDivElement,
    FilterEditorHeaderPropsType
>(function FilterEditorHeader({ className, ...props }, ref) {
    const classNames = useFilterEditorHeaderClassNames(
        FILTER_EDITOR_HEADER_CLASS_PREFIX,
        className,
    );

    const { rootProps, showClearFilterButton, getClearFilterButtonProps } =
        useFilterEditorHeader<HTMLDivElement>(props, ref);

    return (
        <FilterEditorHeaderRoot {...rootProps} className={classNames.Root}>
            <Typography subSectionTitle tag="div" className={classNames.Title}>
                Filter by
            </Typography>
            {showClearFilterButton && (
                <Link
                    small
                    {...getClearFilterButtonProps()}
                    className={classNames.ClearAllButton}
                    marginLeft={6}
                >
                    Clear all
                </Link>
            )}
        </FilterEditorHeaderRoot>
    );
});

FilterEditorHeader.defaultProps = {};

export const MemoizedFilterEditorHeader = memo(FilterEditorHeader);
