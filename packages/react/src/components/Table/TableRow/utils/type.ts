import {
    TableContextValueDataType,
    TableRowSelectionContextValueType,
} from '../../utils/type';

export type UseTableRowType = {
    isHeader: boolean;
    stickyTop: boolean;
    stickyTopVisible: boolean;
} & Pick<
    TableContextValueDataType,
    'stickyColumns' | 'stickyLeftColumnVisible' | 'stickyRightColumnVisible'
>;
