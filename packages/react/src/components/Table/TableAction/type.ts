import { HTMLAttributes } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    PropsWithNodeStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';

type TableActionEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* TableAction component prop type */
export type TableActionPropsType = TableActionEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        TableActionStylesPropsType
    >;

export type TableActionStylesPropsType = {
    Root?: StylesFunctionOrStubType<TableActionEffectivePropsType>;
    // add style properties for other nodes here
};

/* TableAction Root node prop type */
export type TableActionRootPropsType = PropsWithNodeStylePropsType<
    TableActionEffectivePropsType
>;
