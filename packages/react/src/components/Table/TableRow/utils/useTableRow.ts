import { useContext } from 'react';
import {
    TABLE_HEAD,
    TableSectionContext,
} from '../../utils/TableSectionContext';
import { TableContext } from '../../utils/TableContext';
import {
    TableContextValueType,
    TableSectionContextValueType,
} from '../../utils/type';
import { TableRowPropsType } from '../type';
import { TableStickyColumnsMapInternal } from '../../type';

const EMPTY_STICKY_COLUMNS: TableStickyColumnsMapInternal = [];

export const useTableRow = ({
    enableStickyTop,
    enableStickyColumns,
    ...restProps
}: TableRowPropsType) => {
    // sticky header and rows
    const {
        data: {
            stickyHead,
            stickyHeadVisible,
            stickyColumns,
            stickyLeftColumnVisible,
            stickyRightColumnVisible,
        },
    } = useContext<TableContextValueType>(TableContext);

    const {
        data: { section },
    } = useContext<TableSectionContextValueType>(TableSectionContext);

    const isHeader = section === TABLE_HEAD;

    return {
        rootProps: {
            ...restProps,
            isHeader,
        },
        cellsProps: {
            isHeader,
            stickyTop: enableStickyTop ? !!stickyHead && isHeader : false,
            stickyColumns: enableStickyColumns
                ? stickyColumns
                : EMPTY_STICKY_COLUMNS,
            stickyTopVisible: !!stickyHeadVisible && isHeader,
            stickyLeftColumnVisible,
            stickyRightColumnVisible,
        },
    };
};
