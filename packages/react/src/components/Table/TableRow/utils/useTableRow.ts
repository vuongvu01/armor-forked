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
import { UseTableRowType } from './type';

export const useTableRow = (): UseTableRowType => {
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
        isHeader,
        stickyTop: !!stickyHead && isHeader,
        stickyColumns,
        stickyTopVisible: !!stickyHeadVisible && isHeader,
        stickyLeftColumnVisible,
        stickyRightColumnVisible,
    };
};
