import { HTMLAttributes } from 'react';
import { StylePropsType, PropsWithNodeStylePropsType } from '../../type';
import { Indexed } from '../../../type';

type TableFootEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableSectionElement>; // includes all HTML TFoot attributes

/* TableFoot component prop type */
export type TableFootPropsType = TableFootEffectivePropsType &
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* TableFoot Root node prop type */
export type TableFootRootPropsType = PropsWithNodeStylePropsType<
    TableFootEffectivePropsType
>;
