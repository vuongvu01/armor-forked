import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { Indexed } from '../../../type';

type TableFootEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableSectionElement>; // includes all HTML TFoot attributes

/* TableFoot component prop type */
export type TableFootPropsType = TableFootEffectivePropsType &
    ComponentStylePropsType;

/* TableFoot Root node prop type */
export type TableFootRootPropsType = TableFootEffectivePropsType &
    ComponentElementStylePropsType;
