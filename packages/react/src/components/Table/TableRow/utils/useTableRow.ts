import { useCallback, useContext } from 'react';
import {
    TABLE_HEAD,
    TableSectionContext,
    TableSectionContextValueType,
} from '../../utils/TableSectionContext';
import {
    TableContext,
    TableContextValueType,
    TableContextValueDataType,
} from '../../utils/TableContext';
import {
    TableRowSelectionContext,
    TableRowSelectionContextValueType,
} from '../../utils/TableRowSelectionContext';
import { TableRowPropsType } from '../type';

export type UseTableRowType = {
    isHeader: boolean;
    stickyTop: boolean;
    rowSelectionEnabled: boolean;
    rowSelected: boolean;
    onSelectorCellClick: () => void;
    allRowsSelected: boolean;
    someRowsSelected: boolean;
    stickyTopVisible: boolean;
} & Pick<
    TableContextValueDataType,
    | 'stickyLeftColumn'
    | 'stickyRightColumn'
    | 'stickyLeftColumnVisible'
    | 'stickyRightColumnVisible'
> &
    Pick<TableRowSelectionContextValueType, 'rowIds' | 'selectedRowIds'>;

export const useTableRow = ({
    rowId,
}: Pick<TableRowPropsType, 'rowId'>): UseTableRowType => {
    const {
        data: {
            stickyHead,
            stickyHeadVisible,
            stickyRightColumn,
            stickyLeftColumn,
            stickyLeftColumnVisible,
            stickyRightColumnVisible,
        },
    } = useContext<TableContextValueType>(TableContext);

    const { rowIds, selectedRowIds, onRowSelectionChange } = useContext<
        TableRowSelectionContextValueType
    >(TableRowSelectionContext);

    const {
        data: { section },
    } = useContext<TableSectionContextValueType>(TableSectionContext);

    const isHeader = section === TABLE_HEAD;

    const rowSelectionEnabled = !!selectedRowIds;
    const allRowsSelected =
        !!selectedRowIds && !!rowIds && selectedRowIds.length === rowIds.length;
    const someRowsSelected = !!selectedRowIds && !!selectedRowIds.length;
    const onSelectorCellClick = useCallback(() => {
        if (!rowSelectionEnabled || !onRowSelectionChange) {
            return;
        }

        if (isHeader) {
            if (!someRowsSelected || (someRowsSelected && !allRowsSelected)) {
                onRowSelectionChange(rowIds ? [...rowIds] : []);
            } else {
                onRowSelectionChange([]);
            }
        } else {
            if (!rowId || !selectedRowIds) {
                return;
            }

            const selected = selectedRowIds.includes(rowId);
            onRowSelectionChange(
                selected
                    ? selectedRowIds.filter(id => id !== rowId)
                    : [rowId, ...selectedRowIds],
            );
        }
    }, [
        isHeader,
        selectedRowIds,
        rowIds,
        someRowsSelected,
        allRowsSelected,
        onRowSelectionChange,
        rowSelectionEnabled,
        rowId,
    ]);

    return {
        isHeader,
        rowSelectionEnabled,
        rowSelected:
            !!selectedRowIds && !!rowId && selectedRowIds.includes(rowId),
        onSelectorCellClick,
        allRowsSelected,
        someRowsSelected,

        stickyTop: !!stickyHead && isHeader,
        stickyRightColumn: !!stickyRightColumn,
        stickyLeftColumn: !!stickyLeftColumn,
        stickyTopVisible: !!stickyHeadVisible && isHeader,
        stickyLeftColumnVisible,
        stickyRightColumnVisible,
    };
};
