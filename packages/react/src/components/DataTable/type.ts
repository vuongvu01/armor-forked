import { ReactChild } from 'react';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';
import { ObjectLiteralType, ScalarType } from '../../type';
import { TablePropsType } from '../Table/type';
import { TableCellPropsType } from '../Table/TableCell/type';
import {
    TableHeadCellPropsType,
    TableHeadCellRowSortOrderType,
} from '../Table/TableHeadCell/type';
import { PageNavigationPropsType } from '../PageNavigation/type';
import {
    MarginAttributesType,
    PaddingAttributesType,
    SizeAttributesType,
} from '../../system';

export type DataTableColumnType = {
    id: string;
    title?: ReactChild;
    key?: string;
    sortable?: TableHeadCellPropsType['sortable'];
    sortType?: TableHeadCellPropsType['rowSortType'];
    headCellProps?: TableCellPropsType;
    dataCellProps?: TableCellPropsType;
    cellProps?: TableCellPropsType;
    expandableSectionController?: boolean;
    getDataCellProps?: (
        value: any,
        item: DataTableDataType,
        column: DataTableColumnType,
    ) => TableCellPropsType;
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

type DataTableEffectivePropsType = Partial<{
    columns: DataTableColumnType[];
    data: DataTableDataType[];
    tableProps: TablePropsType;

    // row sorting
    rowSortOrder: TableHeadCellRowSortOrderType;
    defaultRowSortOrder: TableHeadCellRowSortOrderType;
    enableNeutralRowSorting: boolean;
    onRowSortOrderChange: (rowSortOrder: TableHeadCellRowSortOrderType) => void;

    // row selection
    enableRowSelection: boolean;
    selectedRowIds: ScalarType[];
    defaultSelectedRowIds: ScalarType[];
    onRowSelectionChange: (selectedRows: ScalarType[]) => void;

    // sticky columns
    stickyLeftColumn: boolean;
    stickyRightColumn: boolean;

    // expandable sections
    enableExpandableSections: boolean;
    renderExpandableSection: (data: DataTableDataType) => ReactChild;
    defaultExpandedSectionIds: ScalarType[];
    expandedSectionIds: ScalarType[];
    onSectionExpansionChange: (expandedSections: ScalarType[]) => void;
    expandableSectionControllerColumnId: ScalarType;

    // page navigation
    enablePageNavigation: boolean;
    pageNavigationItemCount: PageNavigationPropsType['itemCount'];
    pageNavigationPageNumber: PageNavigationPropsType['pageNumber'];
    onPageNavigationPageSelect: PageNavigationPropsType['onPageSelect'];

    // page navigation: page size selector
    pageNavigationPageSize: PageNavigationPropsType['pageSize'];
    enablePageNavigationPageSizeSelector: PageNavigationPropsType['enablePageSizeSelector'];
    onPageNavigationPageSizeChange: PageNavigationPropsType['onPageSizeChange'];
    pageNavigationPageSizeList: PageNavigationPropsType['pageSizeList'];

    // virtualization
    enableVirtualization: boolean;
    averageItemHeight: number;

    enableHeader: boolean;
    // add other custom properties here
}> &
    Pick<TablePropsType, 'stickyHead'> &
    SizeAttributesType &
    MarginAttributesType &
    PaddingAttributesType &
    ObjectLiteralType;

/* DataTable component prop type */
export type DataTablePropsType = DataTableEffectivePropsType &
    ComponentStylePropsType;

/* DataTable node prop type */
export type DataTableRootPropsType = DataTableEffectivePropsType &
    ComponentElementStylePropsType;

export type DataTableVirtualOffsetType = {
    height: number;
} & ComponentElementStylePropsType;

/* DataTable node prop type */
export type DataTableFooterPropsType = ComponentElementStylePropsType;
