import React, { forwardRef, Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useDataTable } from './hooks/useDataTable';
import { DataTablePropsType } from './type';
import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCheckboxCell,
    TableExpandableSection,
} from '../Table';
import { renderExpandableSectionEmpty } from './hooks/useDataTableExpandableSections';
import {
    getArrayOfScalarPropType,
    getScalarPropType,
} from '../../utils/propTypes';
import {
    DataTableRoot,
    DataTableVirtualPadding,
    DataTableFooter,
} from './style';
import { DATA_TABLE_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../utils/hooks';
import { useDataTableClassNames } from './hooks/useDataTableClassNames';
import { PageNavigation } from '../PageNavigation';
import { makeRowClassName } from './utils/makeRowClassName';
import { ActionSheet } from '../ActionSheet';
import { DataTableContext } from './DataTableContext';

/**
 * @armor-docs-component
 */
export const DataTable = forwardRef<HTMLDivElement, DataTablePropsType>(
    function DataTable({ className, ...props }, ref) {
        const {
            columns,
            data,

            rootProps,
            tableProps,
            tableBodyProps,
            getRowProps,
            getHeadCellProps,
            getCellProps,
            getExpandableSectionProps,

            getCellTag,
            getHeadCellTag,

            // row selection
            enableRowSelection,
            getSelectAllCheckboxCellProps,
            getSelectRowCheckboxCellProps,

            // action sheet
            isActionSheetVisible,
            actions,
            actionSheetProps,

            selectedRowIds,
            unselectRows,

            // expandable sections
            enableExpandableSections,
            renderExpandableSection,

            // page navigation
            enablePageNavigation,
            pageNavigationProps,

            // virtualization
            enableVirtualization,
            getVirtualTopSpaceProps,
            getVirtualBottomSpaceProps,
            getRowNumber,
            initialDataLength,

            enableHeader,
            enableFooter,
        } = useDataTable(props, ref);

        const theme = useComponentTheme(DATA_TABLE_CLASS_PREFIX);
        const classNameComponents = useDataTableClassNames(
            DATA_TABLE_CLASS_PREFIX,
            className,
        );

        const contextValue = useMemo(() => {
            return {
                selectedRowIds,
                unselectRows,
                data,
            };
        }, [selectedRowIds, data]);

        return (
            <DataTableContext.Provider value={contextValue}>
                <DataTableRoot
                    {...rootProps}
                    theme={theme}
                    className={classNameComponents.Root}
                >
                    {isActionSheetVisible && (
                        <ActionSheet marginBottom={2} {...actionSheetProps}>
                            {actions}
                        </ActionSheet>
                    )}
                    <Table {...tableProps}>
                        {enableHeader && (
                            <TableHead>
                                <TableRow>
                                    {enableRowSelection && (
                                        <TableCheckboxCell
                                            {...getSelectAllCheckboxCellProps()}
                                        />
                                    )}
                                    {columns.map(column => {
                                        const TableHeadCellComponent = getHeadCellTag(
                                            column,
                                        );

                                        return (
                                            <TableHeadCellComponent
                                                key={column.key || column.id}
                                                {...getHeadCellProps(column)}
                                            >
                                                {column.title}
                                            </TableHeadCellComponent>
                                        );
                                    })}
                                </TableRow>
                            </TableHead>
                        )}
                        <TableBody {...tableBodyProps}>
                            {enableVirtualization && (
                                <DataTableVirtualPadding
                                    {...getVirtualTopSpaceProps()}
                                    className={
                                        classNameComponents.VirtualPaddingTop
                                    }
                                    theme={theme}
                                />
                            )}
                            {data.map((item, index) => {
                                const key = item.key || item.id;

                                return (
                                    <Fragment key={key}>
                                        <TableRow
                                            {...getRowProps(item)}
                                            className={makeRowClassName(
                                                getRowNumber(index),
                                                initialDataLength,
                                                classNameComponents,
                                            )}
                                        >
                                            {enableRowSelection && (
                                                <TableCheckboxCell
                                                    {...getSelectRowCheckboxCellProps(
                                                        item.id,
                                                    )}
                                                />
                                            )}
                                            {columns.map(column => {
                                                const TableCellComponent = getCellTag(
                                                    column,
                                                );

                                                return (
                                                    <TableCellComponent
                                                        key={column.id}
                                                        {...getCellProps(
                                                            column,
                                                            item,
                                                        )}
                                                    >
                                                        {column.formatDataCellContent
                                                            ? column.formatDataCellContent(
                                                                  item[
                                                                      column.id
                                                                  ],
                                                                  item,
                                                                  column,
                                                              )
                                                            : item[column.id]}
                                                    </TableCellComponent>
                                                );
                                            })}
                                        </TableRow>
                                        {enableExpandableSections && (
                                            <TableExpandableSection
                                                {...getExpandableSectionProps(
                                                    item,
                                                )}
                                            >
                                                {renderExpandableSection(item)}
                                            </TableExpandableSection>
                                        )}
                                    </Fragment>
                                );
                            })}
                            {enableVirtualization && (
                                <DataTableVirtualPadding
                                    {...getVirtualBottomSpaceProps()}
                                    className={
                                        classNameComponents.VirtualPaddingBottom
                                    }
                                    theme={theme}
                                />
                            )}
                        </TableBody>
                    </Table>
                    {enableFooter && (
                        <DataTableFooter
                            theme={theme}
                            className={classNameComponents.Footer}
                        >
                            {enablePageNavigation && (
                                <PageNavigation {...pageNavigationProps} />
                            )}
                        </DataTableFooter>
                    )}
                </DataTableRoot>
            </DataTableContext.Provider>
        );
    },
);

DataTable.defaultProps = {
    columns: [],
    data: [],

    // row sorting
    // row selection
    enableRowSelection: false,
    enableNeutralRowSorting: true,

    // expandable sections
    renderExpandableSection: renderExpandableSectionEmpty,

    // page navigation
    enablePageNavigation: false,
};

/** prop-types are required here for run-time checks */
DataTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
        }).isRequired,
    ),
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: getScalarPropType().isRequired,
        }).isRequired,
    ),

    // row sorting
    // row selection
    enableRowSelection: PropTypes.bool,
    selectedRowIds: getArrayOfScalarPropType(),
    defaultSelectedRowIds: getArrayOfScalarPropType(),
    onRowSelectionChange: PropTypes.func,

    // sticky columns
    stickyLeftColumn: PropTypes.bool,
    stickyRightColumn: PropTypes.bool,

    // expandable sections
    expandedSectionIds: getArrayOfScalarPropType(),
    defaultExpandedSectionIds: getArrayOfScalarPropType(),
    expandableSectionControllerColumnId: getScalarPropType(),
    renderExpandableSection: PropTypes.func,
    onSectionExpansionChange: PropTypes.func,

    // page navigation
    enablePageNavigation: PropTypes.bool,
};
