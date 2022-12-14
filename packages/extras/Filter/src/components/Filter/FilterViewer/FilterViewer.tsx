import React, { forwardRef, memo } from 'react';
import { pluralize } from '@deliveryhero/armor-system';

import {
    Typography,
    Flex,
    Link,
    Button,
    MemoizedConditionTag as ConditionTag,
} from '@deliveryhero/armor';
import { useFilterViewerClassNames } from './hooks/useFilterViewerClassNames';
import { useFilterViewer } from './hooks/useFilterViewer';
import {
    FilterViewConditions,
    FilterViewerActions,
    FilterViewerRoot,
    FilterViewerTopBar,
    FilterViewerAddFilterHint,
    FilterViewerTopBarSummary,
} from './style';
import { FilterViewerPropsType } from './type';
import { FILTER_VIEWER_CLASS_PREFIX } from './constants';
import { ConfirmationDialog } from './ConfirmationDialog/ConfirmationDialog';

/**
 * # FilterViewer
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/082f5b-filter/b/221ef2)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import React, { useState, useCallback } from 'react';
 * import { FilterViewer } from '@deliveryhero/armor';
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
 * <FilterViewer
 *     schema={filterSchema}
 *     value={filterValue}
 *     types={conditionTypes}
 *     onValueChange={setFilterValue}
 *     marginTop={6}
 *     onFilterOpenButtonClick={() => setFilterOpen(true)}
 *     filterOpen={filterOpen}
 *     resultCount={8}
 *     resultTotalCount={2500}
 * />
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const FilterViewer = forwardRef<HTMLDivElement, FilterViewerPropsType>(
    function FilterViewer({ className, ...props }, ref) {
        const classNames = useFilterViewerClassNames(
            FILTER_VIEWER_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            getOpenFilterButtonProps,
            getEditFilterButtonProps,
            clearFilterButtonProps,
            confirmationDialogProps,
            getTagProps,
            rootConditionsCount,
            showSelectedFilter,
            showResultCount,
            showResultTotalCount,
            schema,
            isConditionValueEmpty,
            showAddFilterButton,
            showAddFilterHint,
            resultCountFormatted,
            resultTotalCountFormatted,
            filterActions,
            beforeFilterActions,
            afterFilterActions,
            afterAddFilterButton,
        } = useFilterViewer<HTMLDivElement>(props, ref);

        return (
            <FilterViewerRoot {...rootProps} className={classNames.Root}>
                {showAddFilterButton && (
                    <Flex
                        className={classNames.AddFiltersButtonWrapper}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Button
                            secondary
                            {...getOpenFilterButtonProps()}
                            className={classNames.AddFiltersButton}
                        >
                            Add filters
                        </Button>
                        {afterAddFilterButton}
                    </Flex>
                )}
                {showAddFilterHint && (
                    <FilterViewerAddFilterHint
                        className={classNames.AddFilterHint}
                    >
                        Add your filter to refine the results
                    </FilterViewerAddFilterHint>
                )}
                {showSelectedFilter && (
                    <>
                        <FilterViewerTopBar className={classNames.TopBar}>
                            <FilterViewerTopBarSummary
                                className={classNames.TopBarSummary}
                            >
                                <Typography
                                    sectionTitle
                                    tag="span"
                                    className={classNames.TopBarTitle}
                                >
                                    Applied {rootConditionsCount}{' '}
                                    {pluralize(
                                        rootConditionsCount,
                                        'filter',
                                        'filters',
                                    )}
                                </Typography>
                                {showResultCount && (
                                    <Typography
                                        paragraph
                                        medium
                                        tag="span"
                                        className={classNames.TopBarResultCount}
                                        marginLeft={6}
                                    >
                                        showing {resultCountFormatted}{' '}
                                        {showResultTotalCount
                                            ? `out of ${resultTotalCountFormatted}`
                                            : ''}{' '}
                                        results
                                    </Typography>
                                )}
                            </FilterViewerTopBarSummary>
                            <FilterViewerActions className={classNames.Actions}>
                                {beforeFilterActions}
                                <Link
                                    {...getEditFilterButtonProps()}
                                    className={classNames.EditFiltersButton}
                                >
                                    Edit filters
                                </Link>
                                <ConfirmationDialog
                                    classNames={classNames}
                                    {...confirmationDialogProps}
                                    trigger={
                                        <Link
                                            {...clearFilterButtonProps}
                                            className={
                                                classNames.ClearFiltersButton
                                            }
                                        >
                                            Clear all
                                        </Link>
                                    }
                                />
                                {filterActions}
                                {afterFilterActions}
                            </FilterViewerActions>
                        </FilterViewerTopBar>
                        <FilterViewConditions className={classNames.Conditions}>
                            {schema.conditions!.map((condition) => {
                                if (!condition.id) {
                                    // todo: sub-filters are not currently supported
                                    return null;
                                }

                                // dont render empty conditions
                                const path = condition.name || condition.id;

                                if (isConditionValueEmpty(condition, path)) {
                                    return null;
                                }

                                return (
                                    <ConditionTag
                                        {...getTagProps(condition, path)}
                                        key={condition.name || condition.id}
                                        marginBottom={2}
                                        marginRight={2}
                                    />
                                );
                            })}
                        </FilterViewConditions>
                    </>
                )}
            </FilterViewerRoot>
        );
    },
);

export const MemoizedFilterViewer = memo(FilterViewer);
