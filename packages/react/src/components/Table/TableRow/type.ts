import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
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
