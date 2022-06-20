import { HTMLAttributes, ReactChild } from 'react';
import {
    MarginPropsType,
    PaddingPropsType,
    SizePropsType,
    ScalarType,
} from '@deliveryhero/armor-system';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';
import { RefType } from '../../type';
import { TablePropsType, TableCellPropsType } from '../Table';
import { PageNavigationPropsType } from '../PageNavigation';
import { PageNavigationPageSizeListItemType } from '../PageNavigation/type';

type CellPropsType = TableCellPropsType & Record<string, any>;

export type DataTableSortType = 'numerical' | 'alphabetical';
export type DataTableSortOrderWay = 'asc' | 'desc';
export type DataTableRowSortOrderType = [ScalarType, DataTableSortOrderWay][];

export type DataTableColumnType<
    D extends DataTableDataType = DataTableDataType,
> = {
    /** Column identifier */
    id: string;
    /** Column title */
    title?: ReactChild;
    /** React identifier for optimization purposes, if not set, default value is the id */
    key?: string;

    /** Indicates whether this columnLayout is sortable or not */
    sortable?: boolean;
    /** Type of sorting for this column */
    sortType?: DataTableSortType;
    /** Properties to be forwarded to every header cell */
    headCellProps?: CellPropsType;
    /** Properties to be forwarded to every data cell */
    dataCellProps?: CellPropsType;
    /** Properties to be forwarded to every cell */
    cellProps?: TableCellPropsType & Record<string, any>;
    /** If set to true, the columnLayout acts as a controller for the expandable section */
    expandableSectionController?: boolean;
    /** Same as dataCellProps, but can be set individually for each table row */
    getDataCellProps?: (
        value: any,
        item: D,
        column: DataTableColumnType<D>,
    ) => CellPropsType;
    /** Renders the content of a cell for each row individually */
    formatDataCellContent?: (
        value: any,
        item: D,
        column: DataTableColumnType<D>,
    ) => ReactChild | ReactChild[];

    ellipsis?: boolean;
    width?: ScalarType;
    contentAlignY?: 'top' | 'center' | 'bottom';
};

export type DataTableDataType = {
    /** Row identifier */
    id: ScalarType;
    key?: ScalarType;
} & Record<string, any>;

type DataTablePageNavigationPropsType = Partial<{
    itemCount: number;
    pageNumber: number;
    onPageNumberChange: (newPageNumber: number) => void;
    pageSize: number;
    onPageSizeChange: (newPageSize: number) => void;
    enablePageSizeSelector: boolean;
    pageSizeList: { label: ScalarType; value: number }[];
}>;

/** 👉 PROPS TYPE */
type DataTableEffectivePropsType = Partial<{
    /**
     * Defines the structure of the columns.
     *
     * ~~~typescript example title:"formatDataCellContent property"
     * <DataTable columns={[
     *      {
     *          title: 'First name',
     *          id: 'firstName',
     *      },
     *      {
     *          title: 'Last name',
     *          id: 'lastName',
     *      },
     *      {
     *          title: 'Full name',
     *          id: 'fullName',
     *          formatDataCellContent: (value, { firstName, lastName }) => (<span>{firstName}{' '}{lastName}</span>),
     *      },
     * ]} />
     * ~~~
     *
     * @armor-docs-expand DataTableColumnType, TableHeadCellSortType
     */
    columns: DataTableColumnType[];
    /**
     * Defines table data to be displayed.
     *
     * @armor-docs-expand DataTableDataType
     */
    data: DataTableDataType[];

    // row sorting
    /**
     * @armor-docs-expand DataTableRowSortOrderType, DataTableSortOrderWay
     */
    rowSortOrder: DataTableRowSortOrderType;
    /**
     * @armor-docs-expand DataTableRowSortOrderType, DataTableSortOrderWay
     */
    defaultRowSortOrder: DataTableRowSortOrderType;
    /** If set to true, enables a neutral (unsorted) sorting state for a columnLayout */
    enableNeutralRowSorting: boolean;
    /**
     * @armor-docs-expand DataTableRowSortOrderType, DataTableSortOrderWay
     */
    onRowSortOrderChange: (rowSortOrder: DataTableRowSortOrderType) => void;

    // row selection
    /** If set to true, rows become selectable, and the corresponding array of checkboxes appear on the left */
    enableRowSelection: boolean;
    selectedRowIds: ScalarType[];
    defaultSelectedRowIds: ScalarType[];
    onRowSelectionChange: (selectedRows: ScalarType[]) => void;

    // row reordering
    enableRowReordering: boolean;
    onRowOrderChange: (
        items: DataTableDataType[],
        oldIndex: number,
        newIndex: number,
    ) => void;

    // action sheet
    /** If set to true, enables a sticky the ActionSheet above the table */
    enableActionSheet: boolean;
    /** Allows to define a set of actions that appear in the right portion of the ActionSheet */
    actions: ReactChild;

    // sticky parts
    /** If set to true, enables a sticky header. This option is not compatible with **stickyLeftColumn** and **stickyRightColumn** */
    stickyHead: boolean;
    /** If set to true, enables a sticky columnLayout on the left. This option is not compatible with **stickyHead** */
    stickyLeftColumn: boolean;
    /** If set to true, enables a sticky columnLayout on the right. This option is not compatible with **stickyHead** */
    stickyRightColumn: boolean;

    // expandable sections
    /** If set to true, each row receives an expandable section and a trigger, which toggles a corresponding section */
    enableExpandableSections: boolean;
    /**
     * A render property to display the content of the expandable section
     * @armor-docs-expand DataTableDataType
     */
    renderExpandableSection: (data: DataTableDataType) => ReactChild;
    defaultExpandedSectionIds: ScalarType[];
    expandedSectionIds: ScalarType[];
    onSectionExpansionChange: (expandedSections: ScalarType[]) => void;
    /** Sets an id of a columnLayout that will contain an expansion trigger. Please use **columns** property instead */
    expandableSectionControllerColumnId: ScalarType;

    // page navigation
    /**
     * If set to true, the page navigation is displayed
     */
    enablePageNavigation: boolean;
    /**
     * Properties forwarded to the underlying PageNavigation component
     * @armor-docs-expand DataTablePageNavigationPropsType
     */
    pageNavigationProps: DataTablePageNavigationPropsType;
    /**
     * Defines how many items the dataset contains. This value typically comes from the API and is used to calculate the page count
     * @deprecated
     * @see pageNavigationProps
     */
    pageNavigationItemCount: number;
    /**
     * Sets the currently displayed page
     * @deprecated
     * @see pageNavigationProps
     */
    pageNavigationPageNumber: number;
    /**
     * Is triggered when a user navigates to the other page
     * @deprecated
     * @see pageNavigationProps
     */
    onPageNavigationPageSelect: PageNavigationPropsType['onPageSelect'];
    /**
     * Sets the page size
     * @deprecated
     * @see pageNavigationProps
     */
    pageNavigationPageSize: number;
    /**
     * If set to true, enables the selector of the available page sizes
     * @deprecated
     * @see pageNavigationProps
     */
    enablePageNavigationPageSizeSelector: boolean;
    /**
     * Is triggered when a user selects a different page size
     * @deprecated
     * @see pageNavigationProps
     */
    onPageNavigationPageSizeChange: PageNavigationPropsType['onPageSizeChange'];
    /**
     * Defines a list of the available page sizes
     * @armor-docs-expand PageNavigationPageSizeListItemType
     * @deprecated
     * @see pageNavigationProps
     */
    pageNavigationPageSizeList: PageNavigationPageSizeListItemType[];

    // virtualization
    /** If set to true, the table is rendered in the virtual mode. It means that in every single moment only a certain amount of rows is visible. Only enable this feature when there is no pagniation and the amount of data spills over 0.5k entries. */
    enableVirtualization: boolean;
    /** Defines an average height of a table element. This value is taken into account when the table works in the virtual mode. If not set, the table logic will have to do one extra render */
    averageItemHeight: number;
    /** Allows to specify a reference to a wrapping container. Being used in conjunction with the virtualization enables listening to the onscroll event of the container. If not set, the window onscroll event will be processed instead */
    parentContainerRef: RefType<HTMLElement>;

    /** If set to true, the table header is displayed */
    enableHeader: boolean;

    /**
     * If set to false, the table will not use the _table-layout: fixed_ CSS statement.
     */
    enableFixedLayout: boolean;

    /**
     * Properties forwarded to the underlying table component
     * @deprecated
     * */
    tableProps: TablePropsType;

    /**
     * Future reserved
     *
     * @ignore
     */
    loading: boolean;

    /**
     * If set to true, will display the message saying that the table is empty.
     */
    empty: boolean;

    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> &
    SizePropsType &
    MarginPropsType &
    PaddingPropsType;

export type DataTableContextType = {
    selectedRowIds: ScalarType[];
    unselectRows: () => void;
    data: DataTableDataType[];
};

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
