import { TableContextValueDataType } from '../../utils/type';

export type UseTableRowType = {
    isHeader: boolean;
    isFooter: boolean;
    stickyTop: boolean;
    stickyTopVisible: boolean;
} & Pick<
    TableContextValueDataType,
    'stickyColumns' | 'stickyLeftColumnVisible' | 'stickyRightColumnVisible'
>;
