import { Ref } from 'react';
import { TableEffectivePropsType, TablePropsType } from '../type';

export type TableContextValueDataType = {
    stickyLeftColumnVisible?: boolean;
    stickyRightColumnVisible?: boolean;
    stickyHeadVisible?: boolean;
} & Pick<
    TablePropsType,
    'stickyLeftColumn' | 'stickyRightColumn' | 'stickyHead'
>;

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
    | 'stickyLeftColumn'
    | 'stickyRightColumn'
    | 'stickyHead'
    | 'selectedRowIds'
    | 'rowIds'
    | 'onRowSelectionChange'
    | 'rowSortOrder'
    | 'onRowSortOrderChange'
> & {
    ref: Ref<unknown>;
};
