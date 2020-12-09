import { ReactChild } from 'react';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';
import { Indexed, ObjectLiteralType, ScalarType } from '../../type';
import { TablePropsType } from '../Table/type';
import { TableCellPropsType } from '../Table/TableCell/type';
import {
    TableHeadCellPropsType,
    TableHeadCellRowSortOrderType,
} from '../Table/TableHeadCell/type';
import {
    MarginAttributesType,
    PaddingAttributesType,
    SizeAttributesType,
} from '../../system/attributes';

export type DataTableColumnType = {
    title: ReactChild;
    id: string;
    key?: string;
    sortable?: TableHeadCellPropsType['sortable'];
    sortType?: TableHeadCellPropsType['rowSortType'];
    headCellProps?: TableCellPropsType;
    dataCellProps?: TableCellPropsType;
    cellProps?: TableCellPropsType;
    expandableSectionController?: boolean;
    formatDataCellContent?: (
        value: any,
        item: DataTableDataType,
        column: DataTableColumnType,
    ) => ReactChild | ReactChild[];
};

export type DataTableDataType = {
    id: ScalarType;
    key?: ScalarType;
} & ObjectLiteralType;

type DataTableEffectivePropsType = Indexed<{
    columns?: DataTableColumnType[];
    data?: DataTableDataType[];
    tableProps?: TablePropsType;

    // row sorting
    rowSortOrder?: TableHeadCellRowSortOrderType;
    defaultRowSortOrder?: TableHeadCellRowSortOrderType;
    enableNeutralRowSorting?: boolean;
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

    // expandable sections
    defaultExpandedSectionIds?: ScalarType[];
    expandedSectionIds?: ScalarType[];
    expandableSectionControllerColumnId?: ScalarType;
    renderExpandableSection?: (data: DataTableDataType) => ReactChild;
    onSectionExpansionChange?: (expandedSections: ScalarType[]) => void;

    // add other custom properties here
}> &
    Pick<TablePropsType, 'stickyHead'> &
    SizeAttributesType &
    MarginAttributesType &
    PaddingAttributesType;

/* DataTable component prop type */
export type DataTablePropsType = DataTableEffectivePropsType &
    ComponentStylePropsType;

/* DataTable node prop type */
export type DataTableRootPropsType = DataTableEffectivePropsType &
    ComponentElementStylePropsType;
