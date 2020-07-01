import { HTMLAttributes } from 'react';

import { Indexed } from 'src/type';
import {
    NodeStylePropsType,
    StylePropsType,
    StylesFunctionOrStubType,
} from '../type';

type DialogActionsEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* DialogActions component prop type */
export type DialogActionsPropsType = DialogActionsEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        DialogActionsStylesPropsType
    >;

export type DialogActionsStylesPropsType = {
    Root?: StylesFunctionOrStubType<DialogActionsEffectivePropsType>;
    // add style properties for other nodes here
};

/* DialogActions Root node prop type */
export type DialogActionsRootPropsType = DialogActionsEffectivePropsType &
    NodeStylePropsType<DialogActionsEffectivePropsType>;
