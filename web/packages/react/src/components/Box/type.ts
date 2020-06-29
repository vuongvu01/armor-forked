import { HTMLAttributes } from 'react';

import {
    SizeAttributesType,
    PaddingAttributesType,
    MarginAttributesType,
    TextAlignmentAttributesType,
    DisplayAttributesType,
} from 'src/system';
import { Indexed } from 'src/type';
import {
    NodeStylePropsType,
    StylePropsType,
    StylesFunctionOrStubType,
} from '../type';

type BoxEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    MarginAttributesType &
    PaddingAttributesType &
    SizeAttributesType &
    TextAlignmentAttributesType &
    DisplayAttributesType &
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
