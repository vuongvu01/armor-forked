import { ReactChild } from 'react';
import { StylePropsType } from '../type';
import { Indexed, ObjectLiteralType, ScalarType } from '../../type';
import { TablePropsType } from '../Table/type';
import { TableCellPropsType } from '../Table/TableCell/type';
import {
    TableHeadCellPropsType,
    TableHeadCellRowSortOrderType,
} from '../Table/TableHeadCell/type';

export type DataTableColumnType = {
    title: ReactChild;
    id: string;
    key?: string;
    sortable?: TableHeadCellPropsType['sortable'];
    sortType?: TableHeadCellPropsType['sortType'];
    headCellProps?: TableCellPropsType;
    dataCellProps?: TableCellPropsType;
    formatDataCellContent?: (
        value: any,
        item: DataTableDataType,
        column: DataTableColumnType,
    ) => ReactChild | ReactChild[];
};

export type DataTableDataType = {
    id: ScalarType;
    key?: ScalarType;
    cellProps?: TableCellPropsType;
} & ObjectLiteralType;

type DataTableEffectivePropsType = Indexed<{
    columns?: DataTableColumnType[];
    data?: DataTableDataType[];

    // row sorting
    rowSortOrder?: TableHeadCellRowSortOrderType;
    defaultRowSortOrder?: TableHeadCellRowSortOrderType;
    enableUnsortedState?: boolean;
    onRowSortOrderChange?: (
        rowSortOrder: TableHeadCellRowSortOrderType,
    ) => void;

    // row selection
    enableRowSelection?: boolean;
    selectedRowIds?: ScalarType[];
    defaultSelectedRowIds?: ScalarType[];
    onRowSelectionChange?: (selectedRows: ScalarType[]) => void;

    // sticky columns
    stickyLeftColumn?: boolean;
    stickyRightColumn?: boolean;

    // add other custom properties here
}> &
    TablePropsType;

/* DataTable component prop type */
export type DataTablePropsType = DataTableEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;