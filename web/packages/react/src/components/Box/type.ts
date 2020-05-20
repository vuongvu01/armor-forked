import { HTMLAttributes } from 'react';
import {
    NodeStylePropsType,
    StylePropsType,
    StylesFunctionOrStubType,
} from '../type';
import {
    SizeAttributesType,
    PaddingAttributesType,
    MarginAttributesType,
    TextAlignmentAttributesType,
} from '../../system/attributes';
import { Indexed } from '../../type';

type BoxEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    MarginAttributesType &
    PaddingAttributesType &
    SizeAttributesType &
    TextAlignmentAttributesType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* Box component prop type */
export type BoxPropsType = BoxEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        BoxStylesPropsType
    >;

export type BoxStylesPropsType = {
    Root?: StylesFunctionOrStubType<BoxEffectivePropsType>;
    // add style properties for other nodes here
};

/* Box Root node prop type */
export type BoxRootPropsType = BoxEffectivePropsType &
    NodeStylePropsType<BoxEffectivePropsType>;
