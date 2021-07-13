import React, { forwardRef, Ref } from 'react';
// import PropTypes from 'prop-types';

import { useFilterEditorClassNames } from './hooks/useFilterEditorClassNames';
import { useFilterEditor } from './hooks/useFilterEditor';
import {
    FilterEditorRoot,
    FilterEditorHeader,
    FilterEditorConditions,
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
            headerProps,
            conditionsProps,
            clearFilterButtonProps,
            getApplyFilterButtonProps,
            getCloseButtonProps,
            getConditionType,
            showCloseButton,
            showSeparatedActions,
            showInlineActions,

            showResultCount,
            showResultTotalCount,
            resultCountFormatted,
            resultTotalCountFormatted,
            getResultCountProps,
        } = useFilterEditor<HTMLDivElement>(props, ref);

        return (
            <FilterEditorRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                <FilterEditorHeader
                    {...headerProps}
                    theme={theme}
                    className={classNames.Header}
                >
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
                        marginLeft={6}
                    >
                        Clear all
                    </Link>
                </FilterEditorHeader>
                <FilterEditorConditions
                    {...conditionsProps}
                    theme={theme}
                    className={classNames.Conditions}
                >
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
                                className={classNames.Condition}
                                data-path={condition.name}
                            >
                                <ConditionRenderer {...conditionProps} />
                            </FormField>
                        );
                    })}

                    {showInlineActions && (
                        <Button
                            {...getApplyFilterButtonProps()}
                            className={classNames.ApplyButton}
                            secondary
                        >
                            Apply
                        </Button>
                    )}
                </FilterEditorConditions>

                {showResultCount && (
                    <Typography
                        {...getResultCountProps()}
                        className={classNames.ResultCount}
                    >
                        showing {resultCountFormatted}{' '}
                        {showResultTotalCount
                            ? `out of ${resultTotalCountFormatted}`
                            : ''}{' '}
                        results
                    </Typography>
                )}

                {showSeparatedActions && (
                    <FilterEditorActions
                        theme={theme}
                        className={classNames.Actions}
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
                            {...getApplyFilterButtonProps()}
                            className={classNames.ApplyButton}
                        >
                            Apply
                        </Button>
                    </FilterEditorActions>
                )}
            </FilterEditorRoot>
        );
    },
);

FilterEditor.defaultProps = {};

/** prop-types are required here for run-time checks */
FilterEditor.propTypes = {};
