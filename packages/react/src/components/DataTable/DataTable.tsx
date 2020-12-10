import React, { FunctionComponent, forwardRef, Fragment } from 'react';
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
    TableExpandableSection,
    TableControllerCell,
} from '../Table';
import {
    CHECKBOX_CHECK_TYPE_DASH,
    CHECKBOX_CHECK_TYPE_TICK,
} from '../Checkbox';
import { renderExpandableSectionEmpty } from './utils/useDataTableExpandableSections';
import { ObjectLiteralType } from '../../type';
import {
    getArrayOfScalarPropType,
    getScalarPropType,
} from '../../utils/propTypes';
import { DataTableRoot } from './style';
import {
    DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE,
    DATA_TABLE_CLASS_PREFIX,
} from './constants';
import { useComponentTheme } from '../../utils/hooks';
import { useDataTableClassNames } from './utils/useDataTableNames';

export const DataTable: FunctionComponent<DataTablePropsType> = forwardRef(
    function DataTable({ className, ...props }, ref) {
        const {
            columns,
            data,

            expandableSectionProps,

            // row order
            rowSortOrder,
            onHeadCellClick,

            // row selection
            enableRowSelection,
            selectedRowIds,
            onHeadSelectorCellClick,
            onDataSelectorCellClick,
            someRowsSelected,
            allRowsSelected,

            // expandable sections
            enableExpandableSections,
            expandableSectionControllers,
            renderExpandableSection,
            expandedSectionIds,
            onExpansionSectionControllerButtonClick,

            rootProps,
            tableProps,
        } = useDataTable(props);

        const theme = useComponentTheme(DATA_TABLE_CLASS_PREFIX);
        const classNameComponents = useDataTableClassNames(
            DATA_TABLE_CLASS_PREFIX,
            className,
        );

        return (
            <DataTableRoot
                {...rootProps}
                ref={ref}
                theme={theme}
                className={classNameComponents.Root}
            >
                <Table {...tableProps}>
                    <TableHead>
                        <TableRow>
                            {enableRowSelection && (
                                <TableCheckboxCell
                                    checked={
                                        someRowsSelected || allRowsSelected
                                    }
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
                                const isController =
                                    enableExpandableSections &&
                                    expandableSectionControllers[column.id];
                                const paddingLeft = isController
                                    ? DATA_TABLE_EXPANDABLE_SECTION_OFFSET_LEFT_BASE
                                    : undefined;

                                if (column.sortable) {
                                    return (
                                        <TableHeadCell
                                            {...column.headCellProps}
                                            key={key}
                                            columnId={column.id}
                                            data-columnid={column.id}
                                            sortable
                                            rowSortType={column.sortType}
                                            rowSortOrder={rowSortOrder}
                                            onClick={onHeadCellClick}
                                            paddingLeft={paddingLeft}
                                        >
                                            {column.title}
                                        </TableHeadCell>
                                    );
                                }

                                return (
                                    <TableCell
                                        {...column.cellProps}
                                        {...column.headCellProps}
                                        key={key}
                                        data-columnid={column.id}
                                        onClick={onHeadCellClick}
                                        paddingLeft={paddingLeft}
                                    >
                                        {column.title}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(item => {
                            const isSectionExpanded =
                                enableExpandableSections &&
                                expandedSectionIds.includes(item.id);
                            const isRowSelected =
                                enableRowSelection &&
                                selectedRowIds.includes(item.id);
                            const key = item.key || item.id;

                            return (
                                <Fragment key={key}>
                                    <TableRow data-rowid={item.id}>
                                        {enableRowSelection && (
                                            <TableCheckboxCell
                                                checked={isRowSelected}
                                                onClick={
                                                    onDataSelectorCellClick
                                                }
                                                data-rowid={item.id}
                                            />
                                        )}
                                        {columns.map(column => {
                                            const isController =
                                                enableExpandableSections &&
                                                expandableSectionControllers[
                                                    column.id
                                                ];

                                            const CellTag = isController
                                                ? TableControllerCell
                                                : TableCell;

                                            let cellProps: ObjectLiteralType = {
                                                ...column.cellProps,
                                                ...column.dataCellProps,
                                                'data-rowid': item.id,
                                                'data-columnid': column.id,
                                            };
                                            if (isController) {
                                                cellProps = {
                                                    ...cellProps,
                                                    rowId: item.id,
                                                    expanded: isSectionExpanded,
                                                    onExpansionButtonClick: onExpansionSectionControllerButtonClick,
                                                };
                                            }

                                            return (
                                                <CellTag
                                                    key={column.id}
                                                    {...cellProps}
                                                >
                                                    {column.formatDataCellContent
                                                        ? column.formatDataCellContent(
                                                              item[column.id],
                                                              item,
                                                              column,
                                                          )
                                                        : item[column.id]}
                                                </CellTag>
                                            );
                                        })}
                                    </TableRow>
                                    {enableExpandableSections && (
                                        <TableExpandableSection
                                            {...expandableSectionProps}
                                            expanded={isSectionExpanded}
                                            data-expandablesectionid={item.id}
                                        >
                                            {renderExpandableSection(item)}
                                        </TableExpandableSection>
                                    )}
                                </Fragment>
                            );
                        })}
                    </TableBody>
                </Table>
            </DataTableRoot>
        );
    },
);

DataTable.defaultProps = {
    columns: [],
    data: [],
    enableRowSelection: false,
    enableNeutralRowSorting: true,
    renderExpandableSection: renderExpandableSectionEmpty,
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
};
