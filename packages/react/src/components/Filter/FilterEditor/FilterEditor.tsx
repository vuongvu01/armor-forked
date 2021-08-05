import React, { forwardRef, Ref } from 'react';

import { useFilterEditorClassNames } from './hooks/useFilterEditorClassNames';
import { useFilterEditor } from './hooks/useFilterEditor';
import { FilterEditorRoot, FilterEditorConditions } from './style';
import { FilterEditorPropsType } from './type';
import { FILTER_EDITOR_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../../utils/hooks';
import { Typography } from '../../Typography';
import { Button, FormField } from '../..';
import { getDefaultConditionRenderer } from './utils/getDefaultConditionRenderer';
import { FilterEditorActions } from '../FilterEditorActions';
import { FilterEditorHeader } from '../FilterEditorHeader';

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
            getHeaderProps,
            conditionsProps,
            getApplyFilterButtonProps,
            getConditionType,
            showSeparatedActions,
            showInlineActions,
            showHeader,
            showResultCount,
            showResultTotalCount,
            resultCountFormatted,
            resultTotalCountFormatted,
            getResultCountProps,
            getActionProps,
        } = useFilterEditor<HTMLDivElement>(props, ref);

        return (
            <FilterEditorRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                {showHeader && <FilterEditorHeader {...getHeaderProps()} />}
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

                        const key = condition.name || condition.id;

                        return (
                            <FormField
                                key={key}
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
                    <FilterEditorActions {...getActionProps()} />
                )}
            </FilterEditorRoot>
        );
    },
);

FilterEditor.defaultProps = {};
