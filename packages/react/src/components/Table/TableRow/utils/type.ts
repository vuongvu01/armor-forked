import {
    TableContextValueDataType,
    TableRowSelectionContextValueType,
} from '../../utils/type';

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
