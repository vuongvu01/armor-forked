import { HTMLAttributes } from 'react';
import { HeightPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { UseTableRowType } from './hooks/type';

/** 👉 PROPS TYPE */
type TableRowEffectivePropsType = Partial<{
    enableStickyTop: boolean;
    enableStickyColumns: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableRowElement> & // includes all HTML Tr properties
    HeightPropsType;

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
