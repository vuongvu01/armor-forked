import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../../type';
import { Indexed } from '../../../type';

export type TableHeadEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLTableSectionElement>; // includes all HTML THead attributes

/* TableHead component prop type */
export type TableHeadPropsType = TableHeadEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        TableHeadStylesPropsType
    >;

export type TableHeadStylesPropsType = {
    Root?: StylesFunctionOrStubType<TableHeadEffectivePropsType>;
    // add style properties for other nodes here
};

/* TableHead Root node prop type */
export type TableHeadRootPropsType = PropsWithNodeStylePropsType<
    TableHeadEffectivePropsType
>;
