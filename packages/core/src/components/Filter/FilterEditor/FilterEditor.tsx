import React, { forwardRef, Ref } from 'react';

import { useFilterEditorClassNames } from './hooks/useFilterEditorClassNames';
import { useFilterEditor } from './hooks/useFilterEditor';
import { FilterEditorRoot, FilterEditorConditions } from './style';
import { FilterEditorPropsType } from './type';
import { FILTER_EDITOR_CLASS_PREFIX } from './constants';
import { Typography } from '../../Typography';
import { Button, FormField } from '../..';
import { getDefaultConditionRenderer } from './utils/getDefaultConditionRenderer';
import { FilterEditorActions } from '../FilterEditorActions';
import { FilterEditorHeader } from '../FilterEditorHeader';

/**
 * # FilterEditor
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/082f5b-filter/b/221ef2)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { useState, useCallback } from 'react';
 * import { FilterLayout, FilterEditor } from '@deliveryhero/armor';
 *
 * const filterSchema: FilterConditionSchemaType = {
 *     conditions: [
 *         {
 *             id: 'name',
 *             label: 'Name',
 *         },
 *         {
 *             id: 'email',
 *             label: 'Email',
 *         },
 *         {
 *             id: 'phoneNumber',
 *             label: 'Phone number',
 *         },
 *     ],
 * };
 *
 * const [filterValue, setFilterValue] = useState<FilterConditionValueType | undefined>();
 * const [filterOpen, setFilterOpen] = useState(false);
 *
 * <FilterLayout
 *     tall
 *     filterOpen={filterOpen}
 *     filterEditor={
 *         <FilterEditor
 *             schema={filterSchema}
 *             value={filterValue}
 *             types={conditionTypes}
 *             onValueChange={setFilterValue}
 *             onClose={() => setFilterOpen(false)}
 *             paddingTop={6}
 *             paddingLeft={2}
 *             paddingRight={6}
 *             paddingBottom={6}
 *         />
 *     }
 *     >
 *     Data grid here...
 * </FilterLayout>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const FilterEditor = forwardRef<HTMLDivElement, FilterEditorPropsType>(
    function FilterEditor({ className, ...props }, ref: Ref<HTMLDivElement>) {
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
            <FilterEditorRoot {...rootProps} className={classNames.Root}>
                {showHeader && <FilterEditorHeader {...getHeaderProps()} />}
                <FilterEditorConditions
                    {...conditionsProps}
                    className={classNames.Conditions}
                >
                    {schema.conditions!.map((condition) => {
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
