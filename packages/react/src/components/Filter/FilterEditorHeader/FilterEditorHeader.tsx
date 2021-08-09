import React, { forwardRef } from 'react';

import { useFilterEditorHeaderClassNames } from './hooks/useFilterEditorHeaderClassNames';
import { useFilterEditorHeader } from './hooks/useFilterEditorHeader';
import { FilterEditorHeaderRoot } from './style';
import { FilterEditorHeaderPropsType } from './type';
import { FILTER_EDITOR_HEADER_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';
import { Typography } from '../../Typography';
import { Link } from '../../Link';

export const FilterEditorHeader = forwardRef<
    HTMLDivElement,
    FilterEditorHeaderPropsType
>(function FilterEditorHeader({ className, ...props }, ref) {
    const theme = useComponentTheme(FILTER_EDITOR_HEADER_CLASS_PREFIX);
    const classNames = useFilterEditorHeaderClassNames(
        FILTER_EDITOR_HEADER_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        showClearFilterButton,
        getClearFilterButtonProps,
    } = useFilterEditorHeader<HTMLDivElement>(props, ref);

    return (
        <FilterEditorHeaderRoot
            {...rootProps}
            theme={theme}
            className={classNames.Root}
        >
            <Typography sectionTitle tag="div" className={classNames.Title}>
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
