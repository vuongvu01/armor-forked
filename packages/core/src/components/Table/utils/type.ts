import { ArrayLikeType } from '@deliveryhero/armor-system';

import { TablePropsType, TableStickyColumnMapInternalItem } from '../type';

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

export type TableSectionContextValueDataType = {
    section?: 'thead' | 'tfoot';
};

export type TableSectionContextValueType = {
    data: TableSectionContextValueDataType;
};
