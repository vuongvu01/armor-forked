import React, { FunctionComponent, forwardRef, Fragment } from 'react';
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
import { DataTableRoot, DataTableFooter } from './style';
import { DATA_TABLE_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../utils/hooks';
import { useDataTableClassNames } from './hooks/useDataTableClassNames';
import { PageNavigation } from '../PageNavigation';

export const DataTable: FunctionComponent<DataTablePropsType> = forwardRef(
    function DataTable({ className, ...props }, ref) {
        const {
            columns,
            data,

            // row selection
            enableRowSelection,
            getSelectAllCheckboxCellProps,
            getSelectRowCheckboxCellProps,

            // expandable sections
            enableExpandableSections,
            renderExpandableSection,

            // page navigation
            enablePageNavigation,
            pageNavigationProps,

            rootProps,
            tableProps,
            getRowProps,
            getHeadCellProps,
            getCellProps,
            getExpandableSectionProps,

            getCellTag,
            getHeadCellTag,

            enableHeader,
            enableFooter,
        } = useDataTable(props, ref);

        const theme = useComponentTheme(DATA_TABLE_CLASS_PREFIX);
        const classNameComponents = useDataTableClassNames(
            DATA_TABLE_CLASS_PREFIX,
            className,
        );

        return (
            <DataTableRoot
                {...rootProps}
                theme={theme}
                className={classNameComponents.Root}
            >
                <Table {...tableProps}>
                    {enableHeader && (
                        <TableHead>
                            <TableRow>
                                {enableRowSelection && (
                                    <TableCheckboxCell
                                        {...getSelectAllCheckboxCellProps()}
                                        theme={theme}
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
                    <TableBody>
                        {data.map(item => {
                            const key = item.key || item.id;

                            return (
                                <Fragment key={key}>
                                    <TableRow {...getRowProps(item)}>
                                        {enableRowSelection && (
                                            <TableCheckboxCell
                                                {...getSelectRowCheckboxCellProps(
                                                    item.id,
                                                )}
                                                theme={theme}
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
                                                              item[column.id],
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
                                            {...getExpandableSectionProps(item)}
                                        >
                                            {renderExpandableSection(item)}
                                        </TableExpandableSection>
                                    )}
                                </Fragment>
                            );
                        })}
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
