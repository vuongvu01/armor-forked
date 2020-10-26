import { Ref } from 'react';
import {
    TableEffectivePropsType,
    TablePropsType,
    TableStickyColumnMapInternalItem,
} from '../type';
import { ArrayLikeType } from '../../../type';

export type TableContextValueDataType = {
    stickyLeftColumnVisible?: boolean;
    stickyRightColumnVisible?: boolean;
    stickyHeadVisible?: boolean;
    stickyColumns: ArrayLikeType<TableStickyColumnMapInternalItem>;
} & Pick<TablePropsType, 'stickyHead'>;

export type TableContextValueType = {
    data: TableContextValueDataType;
    update: (data: TableContextValueType) => void;
};

export type TableRowSelectionContextValueType = Pick<
    TableEffectivePropsType,
    'rowIds' | 'selectedRowIds' | 'onRowSelectionChange'
>;

export type TableRowSortOrderContextValueType = Pick<
    TableEffectivePropsType,
    'rowSortOrder' | 'onRowSortOrderChange'
>;

export type TableSectionContextValueDataType = {
    section?: 'thead' | 'tfoot';
};

export type TableSectionContextValueType = {
    data: TableSectionContextValueDataType;
};

export type TableHookPropsType = Pick<
    TableEffectivePropsType,
    'stickyColumns' | 'stickyHead'
> & {
    ref: Ref<unknown>;
};
