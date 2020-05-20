import { HTMLAttributes } from 'react';
import {
    NodeStylePropsType,
    StylePropsType,
    StylesFunctionOrStubType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

type PaperEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    MarginAttributesType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* Paper component prop type */
export type PaperPropsType = PaperEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        PaperStylesPropsType
    >;

export type PaperStylesPropsType = {
    Root?: StylesFunctionOrStubType<PaperEffectivePropsType>;
    // add style properties for other nodes here
};

/* Paper Root node prop type */
export type PaperRootPropsType = PaperEffectivePropsType &
    NodeStylePropsType<PaperEffectivePropsType>;
