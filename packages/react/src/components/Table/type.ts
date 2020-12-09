import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import {
    HeightAttributesType,
    MarginAttributesType,
    WidthAttributesType,
} from '../../system/attributes';
import { Indexed } from '../../type';
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

export type TableEffectivePropsType = Indexed<{
    horizontalScroll?: boolean;
    stickyColumns?: TableStickyColumnsMap;
    stickyHead?: boolean;
    enableFixedLayout?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableElement> & // includes all HTML Table attributes
    WidthAttributesType &
    HeightAttributesType &
    MarginAttributesType;

/* Table component prop type */
export type TablePropsType = TableEffectivePropsType & ComponentStylePropsType;

/* Table Root node prop type */
export type TableRootPropsType = TableEffectivePropsType &
    ComponentElementStylePropsType;
