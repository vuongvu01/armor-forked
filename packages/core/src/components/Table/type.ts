import { HTMLAttributes } from 'react';
import {
    HeightPropsType,
    MarginPropsType,
    WidthPropsType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import {
    TableCellStickyAlignment,
    TableCellStickyOffset,
} from './TableCell/type';

export type TableStickyColumnMapItem = {
    index: number;
    offset?: TableCellStickyOffset;
    alignment?: TableCellStickyAlignment;
};
export type TableStickyColumnsMap = TableStickyColumnMapItem[];

export type TableStickyColumnMapInternalItem = TableStickyColumnMapItem & {
    edge: boolean;
};
export type TableStickyColumnsMapInternal = TableStickyColumnMapInternalItem[];

/** 👉 PROPS TYPE */
export type TableEffectivePropsType = Partial<{
    horizontalScroll: boolean;
    /**
     * @armor-docs-expand TableStickyColumnsMap, TableStickyColumnMapItem, TableCellStickyOffset, TableCellStickyAlignment
     */
    stickyColumns: TableStickyColumnsMap;
    stickyHead: boolean;
    /**
     * If set to false, the table will not use the _table-layout: fixed_ CSS statement.
     */
    enableFixedLayout: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableElement> & // includes all HTML Table properties
    WidthPropsType &
    HeightPropsType &
    MarginPropsType;

/* Table component prop type */
export type TablePropsType = TableEffectivePropsType & ComponentStylePropsType;

/* Table Root node prop type */
export type TableRootPropsType = TableEffectivePropsType &
    ComponentElementStylePropsType;
