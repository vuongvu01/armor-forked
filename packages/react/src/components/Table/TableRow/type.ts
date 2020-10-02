import { HTMLAttributes } from 'react';
import { StylePropsType, PropsWithNodeStylePropsType } from '../../type';
import { Indexed, ScalarType } from '../../../type';
import { UseTableRowType } from './utils/type';
import { HeightAttributesType } from '../../../system/attributes';

type TableRowEffectivePropsType = Indexed<{
    rowId?: ScalarType;
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
    TableRowEffectivePropsType &
        Pick<UseTableRowType, 'rowSelectionEnabled' | 'isHeader'>
>;

export type TableRowCellsPropTypes = Pick<
    UseTableRowType,
    | 'stickyLeftColumn'
    | 'stickyRightColumn'
    | 'stickyTopVisible'
    | 'stickyLeftColumnVisible'
    | 'stickyRightColumnVisible'
    | 'stickyTop'
    | 'isHeader'
    | 'rowSelectionEnabled'
>;
