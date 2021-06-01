import React, { forwardRef, Ref } from 'react';
// import PropTypes from 'prop-types';

import { useFilterEditorClassNames } from './hooks/useFilterEditorClassNames';
import { useFilterEditor } from './hooks/useFilterEditor';
import {
    FilterEditorRoot,
    FilterEditorHeader,
    FilterEditorFields,
    FilterEditorActions,
} from './style';
import { FilterEditorPropsType } from './type';
import { FILTER_EDITOR_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';
import { Typography } from '../../Typography';
import { Link } from '../../Link';
import { Button, FormField } from '../..';
import { getDefaultConditionRenderer } from './utils/getDefaultConditionRenderer';

export const FilterEditor = forwardRef<HTMLDivElement, FilterEditorPropsType>(
    function FilterEditor({ className, ...props }, ref: Ref<HTMLDivElement>) {
        const theme = useComponentTheme(FILTER_EDITOR_CLASS_PREFIX);
        const classNames = useFilterEditorClassNames(
            FILTER_EDITOR_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            getConditionProps,
            schema,
            clearFilterButtonProps,
            applyFilterButtonProps,
            closeButtonProps,
            getConditionType,
        } = useFilterEditor<HTMLDivElement>(props, ref);

        return (
            <FilterEditorRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                <FilterEditorHeader theme={theme} className={classNames.Header}>
                    <Typography
                        sectionTitle
                        tag="div"
                        className={classNames.HeaderTitle}
                    >
                        Filter by
                    </Typography>
                    <Link
                        small
                        {...clearFilterButtonProps}
                        className={classNames.HeaderClearAllButton}
                    >
                        Clear all
                    </Link>
                </FilterEditorHeader>
                <FilterEditorFields theme={theme} className={classNames.Fields}>
                    {schema.conditions!.map(condition => {
                        if (!condition.id) {
                            // todo: sub-filters are not currently supported
                            return null;
                        }

                        const ConditionRenderer = getDefaultConditionRenderer(
                            getConditionType(condition),
                        );

                        const conditionProps = getConditionProps(
                            condition,
                            condition.name || condition.id, // todo: path here later
                        );

                        return (
                            <FormField
                                key={condition.name}
                                className={classNames.Field}
                                data-path={condition.name}
                            >
                                <ConditionRenderer {...conditionProps} />
                            </FormField>
                        );
                    })}
                </FilterEditorFields>
                <FilterEditorActions
                    theme={theme}
                    className={classNames.Actions}
                >
                    <Button
                        secondary
                        marginRight={4}
                        {...closeButtonProps}
                        className={classNames.CloseButton}
                    >
                        Close
                    </Button>
                    <Button
                        wide
                        {...applyFilterButtonProps}
                        className={classNames.ApplyButton}
                    >
                        Apply
                    </Button>
                </FilterEditorActions>
            </FilterEditorRoot>
        );
    },
);

FilterEditor.defaultProps = {};

/** prop-types are required here for run-time checks */
FilterEditor.propTypes = {};
