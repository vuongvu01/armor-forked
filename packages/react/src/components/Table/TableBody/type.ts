import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { Indexed } from '../../../type';

type TableBodyEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableSectionElement>; // includes all HTML TBody attributes

/* TableBody component prop type */
export type TableBodyPropsType = TableBodyEffectivePropsType &
    ComponentStylePropsType;

/* TableBody Root node prop type */
export type TableBodyRootPropsType = TableBodyEffectivePropsType &
    ComponentElementStylePropsType;
