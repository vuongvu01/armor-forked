import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { UseTableRowType } from './hooks/type';
import { HeightAttributesType } from '../../../system';

type TableRowEffectivePropsType = Partial<{
    enableStickyTop: boolean;
    enableStickyColumns: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableRowElement> & // includes all HTML Tr attributes
    HeightAttributesType;

/* TableRow component prop type */
export type TableRowPropsType = TableRowEffectivePropsType &
    ComponentStylePropsType;

/* TableRow Root node prop type */
export type TableRowRootPropsType = TableRowEffectivePropsType &
    Pick<UseTableRowType, 'isHeader'> &
    ComponentElementStylePropsType;

export type TableRowCellsPropTypes = Pick<
    UseTableRowType,
    | 'stickyColumns'
    | 'stickyTopVisible'
    | 'stickyLeftColumnVisible'
    | 'stickyRightColumnVisible'
    | 'stickyTop'
    | 'isHeader'
>;
