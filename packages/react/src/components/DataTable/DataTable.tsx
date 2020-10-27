import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useDataTable } from './utils/useDataTable';
import { DataTablePropsType } from './type';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableHeadCell,
    TableCheckboxCell,
} from '../Table';
import {
    CHECKBOX_CHECK_TYPE_DASH,
    CHECKBOX_CHECK_TYPE_TICK,
} from '../Checkbox';

export const DataTable: FunctionComponent<DataTablePropsType> = forwardRef(
    function DataTable(props, ref) {
        const {
            columns,
            data,

            // row order
            rowSortOrder,
            onRowSortOrderChange,

            // row selection
            enableRowSelection,
            selectedRowIds,
            onHeadSelectorCellClick,
            onDataSelectorCellClick,
            someRowsSelected,
            allRowsSelected,

            // sticky columns
            stickyColumns,

            restRootProps,
        } = useDataTable(props);

        return (
            <Table {...restRootProps} ref={ref} stickyColumns={stickyColumns}>
                <TableHead>
                    <TableRow>
                        {enableRowSelection && (
                            <TableCheckboxCell
                                checked={someRowsSelected || allRowsSelected}
                                checkedIcon={
                                    allRowsSelected
                                        ? CHECKBOX_CHECK_TYPE_TICK
                                        : CHECKBOX_CHECK_TYPE_DASH
                                }
                                isHeader
                                onClick={onHeadSelectorCellClick}
                            />
                        )}
                        {columns.map(column => {
                            const key = column.key || column.id;

                            if (column.sortable) {
                                return (
                                    <TableHeadCell
                                        {...column.headCellProps}
                                        key={key}
                                        columnId={column.id}
                                        data-columnid={column.id}
                                        sortable
                                        sortType={column.sortType}
                                        rowSortOrder={rowSortOrder}
                                        onRowSortOrderChange={
                                            onRowSortOrderChange
                                        }
                                    >
                                        {column.title}
                                    </TableHeadCell>
                                );
                            }

                            return (
                                <TableCell
                                    {...column.headCellProps}
                                    key={key}
                                    data-columnid={column.id}
                                >
                                    {column.title}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(item => (
                        <TableRow key={item.key || item.id}>
                            {enableRowSelection && (
                                <TableCheckboxCell
                                    checked={selectedRowIds.includes(item.id)}
                                    onClick={onDataSelectorCellClick}
                                    data-rowid={item.id}
                                />
                            )}
                            {columns.map(column => (
                                <TableCell
                                    {...column.dataCellProps}
                                    key={column.id}
                                    data-rowid={item.id}
                                    data-columnid={column.id}
                                >
                                    {column.formatDataCellContent
                                        ? column.formatDataCellContent(
                                              item[column.id],
                                              item,
                                              column,
                                          )
                                        : item[column.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    },
);

DataTable.defaultProps = {
    columns: [],
    data: [],
    enableRowSelection: false,
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
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
        }).isRequired,
    ),

    // row sorting
    // row selection
    enableRowSelection: PropTypes.bool,
    selectedRowIds: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    ),
    defaultSelectedRowIds: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    ),
    onRowSelectionChange: PropTypes.func,

    // sticky columns
    stickyLeftColumn: PropTypes.bool,
    stickyRightColumn: PropTypes.bool,
};
