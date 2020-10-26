import { HTMLAttributes } from 'react';
import { StylePropsType, PropsWithNodeStylePropsType } from '../../type';
import { Indexed } from '../../../type';
import { UseTableRowType } from './utils/type';
import { HeightAttributesType } from '../../../system/attributes';

type TableRowEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableRowElement> & // includes all HTML Tr attributes
    HeightAttributesType;

/* TableRow component prop type */
export type TableRowPropsType = TableRowEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* TableRow Root node prop type */
export type TableRowRootPropsType = PropsWithNodeStylePropsType<
    TableRowEffectivePropsType & Pick<UseTableRowType, 'isHeader'>
>;

export type TableRowCellsPropTypes = Pick<
    UseTableRowType,
    | 'stickyColumns'
    | 'stickyTopVisible'
    | 'stickyLeftColumnVisible'
    | 'stickyRightColumnVisible'
    | 'stickyTop'
    | 'isHeader'
>;
