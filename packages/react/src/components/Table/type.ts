import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';
import {
    HeightAttributesType,
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed, ScalarType } from '../../type';

type TableSortOrderWay = 'asc' | 'desc';

export type TableRowSortOrderType = [ScalarType, TableSortOrderWay][];

export type TableEffectivePropsType = Indexed<{
    horizontalScroll?: boolean;
    stickyLeftColumn?: boolean;
    stickyRightColumn?: boolean;
    stickyHead?: boolean;
    selectedRowIds?: ScalarType[];
    rowIds?: ScalarType[];
    onRowSelectionChange?: (selectedRows: ScalarType[]) => void;
    rowSortOrder?: TableRowSortOrderType;
    onRowSortOrderChange?: (rowSortOrder: TableRowSortOrderType) => void;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableElement> & // includes all HTML Table attributes
    WidthAttributesType &
    HeightAttributesType &
    MarginAttributesType;

/* Table component prop type */
export type TablePropsType = TableEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        TableStylesPropsType
    >;

export type TableStylesPropsType = {
    Root?: StylesFunctionOrStubType<TableEffectivePropsType>;
    // add style properties for other nodes here
};

/* Table Root node prop type */
export type TableRootPropsType = PropsWithNodeStylePropsType<
    TableEffectivePropsType
>;
