import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
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
import { useComponentTheme } from '../../../utils/hooks';
import { Typography } from '../../Typography';
import { Link } from '../../Link';
import { Button } from '../../Button';
import { pluralize } from '../../../system/util/pluralize';
import { ConditionTag } from '../../ConditionTag';
import { ConfirmationDialog } from './ConfirmationDialog/ConfirmationDialog';

/**
 * @armor-docs-component
 */
export const FilterViewer = forwardRef<HTMLDivElement, FilterViewerPropsType>(
    function FilterViewer({ className, ...props }, ref) {
        const theme = useComponentTheme(FILTER_VIEWER_CLASS_PREFIX);
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
        } = useFilterViewer<HTMLDivElement>(props, ref);

        return (
            <FilterViewerRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                {showAddFilterButton && (
                    <Button
                        secondary
                        {...getOpenFilterButtonProps()}
                        className={classNames.AddFiltersButton}
                    >
                        Add filters
                    </Button>
                )}
                {showAddFilterHint && (
                    <FilterViewerAddFilterHint
                        theme={theme}
                        className={classNames.AddFilterHint}
                    >
                        Add your filter to refine the results
                    </FilterViewerAddFilterHint>
                )}
                {showSelectedFilter && (
                    <>
                        <FilterViewerTopBar
                            theme={theme}
                            className={classNames.TopBar}
                        >
                            <FilterViewerTopBarSummary
                                theme={theme}
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
                            <FilterViewerActions
                                theme={theme}
                                className={classNames.Actions}
                            >
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
                            </FilterViewerActions>
                        </FilterViewerTopBar>
                        <FilterViewConditions
                            theme={theme}
                            className={classNames.Conditions}
                        >
                            {schema.conditions!.map(condition => {
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

FilterViewer.defaultProps = {};

/** prop-types are required here for run-time checks */
FilterViewer.propTypes = {};
