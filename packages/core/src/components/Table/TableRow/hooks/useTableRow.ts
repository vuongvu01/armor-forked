import { useContext } from 'react';

import mergeProps from 'merge-props';
import {
    TABLE_HEAD,
    TABLE_FOOT,
    TableSectionContext,
} from '../../utils/TableSectionContext';
import { TableContext } from '../../utils/TableContext';
import {
    TableContextValueType,
    TableSectionContextValueType,
} from '../../utils/type';
import { TableRowPropsType } from '../type';
import { TableStickyColumnsMapInternal } from '../../type';
import { useIsHovered } from './useIsHovered';

const EMPTY_STICKY_COLUMNS: TableStickyColumnsMapInternal = [];

export const useTableRow = ({
    enableStickyTop,
    enableStickyColumns,
    onClick,
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

    const { onMouseEnter, onMouseLeave, isHovered } = useIsHovered();

    const isHeader = section === TABLE_HEAD;
    const isFooter = section === TABLE_FOOT;

    return {
        rootProps: {
            ...mergeProps(restProps, { onMouseEnter, onMouseLeave }),
            isHeader,
            isFooter,
            onClick,
            enableRowClick: !!onClick,
        },
        cellsProps: {
            isHeader,
            isFooter,
            stickyTop: enableStickyTop ? !!stickyHead && isHeader : false,
            stickyColumns: enableStickyColumns
                ? stickyColumns
                : EMPTY_STICKY_COLUMNS,
            stickyTopVisible: !!stickyHeadVisible && isHeader,
            stickyLeftColumnVisible,
            stickyRightColumnVisible,
        },
        isHovered,
    };
};
