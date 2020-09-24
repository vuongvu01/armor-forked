import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../../type';
import { Indexed } from '../../../type';

type TableBodyEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableSectionElement>; // includes all HTML TBody attributes

/* TableBody component prop type */
export type TableBodyPropsType = TableBodyEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        TableBodyStylesPropsType
    >;

export type TableBodyStylesPropsType = {
    Root?: StylesFunctionOrStubType<TableBodyEffectivePropsType>;
    // add style properties for other nodes here
};

/* TableBody Root node prop type */
export type TableBodyRootPropsType = PropsWithNodeStylePropsType<
    TableBodyEffectivePropsType
>;
