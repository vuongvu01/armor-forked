import React, { forwardRef, Fragment, useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import {
    getArrayOfScalarPropType,
    getScalarPropType,
} from '@deliveryhero/armor-system';

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
    DataTableRoot,
    DataTableVirtualPadding,
    DataTableFooter,
    DataTableEmptyStateContainer,
    DataTableRowDragHandle,
    DataTableDragHandleCell,
} from './style';
import { DATA_TABLE_CLASS_PREFIX } from './constants';
import { useDataTableClassNames } from './hooks/useDataTableClassNames';
import { PageNavigation } from '../PageNavigation';
import { makeRowClassName } from './utils/makeRowClassName';
import { ActionSheet } from '../ActionSheet';
import { DataTableContext } from './DataTableContext';
import { MemoizedEmptyState as EmptyState } from '../EmptyState';
import { DataTableDroppableContainer } from './DataTableDroppableContainer';
import { DataTableDraggableRowContainer } from './DataTableDraggableRowContainer';

/**
 * # DataTable
 *
 * This is a wrapper around the Table component. While the Table provides only a visual part, the DataTable acts as a layer of business logic and provides: row selection, row sorting.
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/47e813-data-table/b/682086)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { DataTable } from '@deliveryhero/armor';
 *
 * const columns = [
 *     {
 *         title: 'Name',
 *         id: 'name',
 *     },
 *     {
 *         title: 'Age',
 *         id: 'age',
 *         sortable: true,
 *         formatDataCellContent: (value: string) => `${value} years`,
 *     },
 *     {
 *         title: 'Address',
 *         sortable: true,
 *         id: 'address',
 *     },
 * ];
 *
 * const data = [
 *     {
 *         id: '1',
 *         name: 'Mike',
 *         age: 32,
 *         address: '10 Downing Street',
 *     },
 *     {
 *         id: '3',
 *         name: 'Jill',
 *         age: 19,
 *         address: 'Raccoon City',
 *     },
 *     {
 *         id: '2',
 *         name: 'John',
 *         age: 42,
 *         address: '10 Downing Street',
 *     },
 * ];;
 *
 * <DataTable columns={columns} data={data} />
 * ```
 * ***
 *
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

            enableRowReordering,
            onRowOrderChange,

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
            enableBody,
            enableEmpty,

            getEmptyStateCellProps,
            getEmptyStateProps,
        } = useDataTable(props, ref);

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
        }, [selectedRowIds, unselectRows, data]);

        const renderRow = useCallback(
            // eslint-disable-next-line react/display-name
            (activeId: string, dragHandlerProps?: any) => () => {
                const index = data.findIndex(
                    ({ id }) => String(id) === activeId,
                );
                const item = data[index];

                return (
                    <TableRow
                        {...getRowProps(item)}
                        className={makeRowClassName(
                            getRowNumber(index),
                            initialDataLength,
                            classNameComponents,
                        )}
                    >
                        {enableRowReordering && (
                            <DataTableDragHandleCell>
                                <DataTableRowDragHandle {...dragHandlerProps} />
                            </DataTableDragHandleCell>
                        )}
                        {enableRowSelection && (
                            <TableCheckboxCell
                                {...getSelectRowCheckboxCellProps(item.id)}
                            />
                        )}
                        {columns.map((column) => {
                            const TableCellComponent = getCellTag(column);

                            return (
                                <TableCellComponent
                                    key={column.id}
                                    {...getCellProps(column, item)}
                                >
                                    {column.formatDataCellContent
                                        ? column.formatDataCellContent(
                                              item[column.id],
                                              item,
                                              column,
                                          )
                                        : item[column.id]}
                                </TableCellComponent>
                            );
                        })}
                    </TableRow>
                );
            },
            [
                data,
                columns,
                initialDataLength,
                classNameComponents,
                enableRowSelection,
                enableRowReordering,
                getRowProps,
                getRowNumber,
                getCellProps,
                getCellTag,
                getSelectRowCheckboxCellProps,
            ],
        );

        return (
            <DataTableContext.Provider value={contextValue}>
                <DataTableDroppableContainer
                    enableRowReordering={enableRowReordering}
                    data={data}
                    tableProps={tableProps}
                    renderRow={renderRow}
                    onRowOrderChange={onRowOrderChange}
                >
                    <DataTableRoot
                        {...rootProps}
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
                                        {enableRowReordering && (
                                            <DataTableDragHandleCell />
                                        )}
                                        {enableRowSelection && (
                                            <TableCheckboxCell
                                                {...getSelectAllCheckboxCellProps()}
                                            />
                                        )}
                                        {columns.map((column) => {
                                            const TableHeadCellComponent =
                                                getHeadCellTag(column);

                                            return (
                                                <TableHeadCellComponent
                                                    key={
                                                        column.key || column.id
                                                    }
                                                    {...getHeadCellProps(
                                                        column,
                                                    )}
                                                >
                                                    {column.title}
                                                </TableHeadCellComponent>
                                            );
                                        })}
                                    </TableRow>
                                </TableHead>
                            )}
                            <TableBody {...tableBodyProps}>
                                {enableEmpty && (
                                    <tr
                                        className={
                                            classNameComponents.EmptyStateTableRow
                                        }
                                    >
                                        <td
                                            {...getEmptyStateCellProps()}
                                            className={
                                                classNameComponents.EmptyStateTableCell
                                            }
                                        >
                                            <DataTableEmptyStateContainer
                                                className={
                                                    classNameComponents.EmptyStateContainer
                                                }
                                            >
                                                <EmptyState
                                                    marginY={3}
                                                    {...getEmptyStateProps()}
                                                />
                                            </DataTableEmptyStateContainer>
                                        </td>
                                    </tr>
                                )}
                                {enableBody && (
                                    <>
                                        {enableVirtualization && (
                                            <DataTableVirtualPadding
                                                {...getVirtualTopSpaceProps()}
                                                className={
                                                    classNameComponents.VirtualPaddingTop
                                                }
                                            />
                                        )}
                                        {data.map((item) => {
                                            const key = item.key || item.id;

                                            return (
                                                <Fragment key={key}>
                                                    <DataTableDraggableRowContainer
                                                        enableRowReordering={
                                                            enableRowReordering
                                                        }
                                                        id={String(item.id)}
                                                    >
                                                        {(dragHandlerProps) =>
                                                            renderRow(
                                                                String(item.id),
                                                                dragHandlerProps,
                                                            )()
                                                        }
                                                    </DataTableDraggableRowContainer>

                                                    {enableExpandableSections && (
                                                        <TableExpandableSection
                                                            {...getExpandableSectionProps(
                                                                item,
                                                            )}
                                                        >
                                                            {renderExpandableSection(
                                                                item,
                                                            )}
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
                                            />
                                        )}
                                    </>
                                )}
                            </TableBody>
                        </Table>
                        {enableFooter && (
                            <DataTableFooter
                                className={classNameComponents.Footer}
                            >
                                {enablePageNavigation && (
                                    <PageNavigation {...pageNavigationProps} />
                                )}
                            </DataTableFooter>
                        )}
                    </DataTableRoot>
                </DataTableDroppableContainer>
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
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
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

export const MemoizedDataTable = memo(DataTable);
