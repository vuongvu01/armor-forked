import { HTMLAttributes } from 'react';
import {
    StyleNodePropsType,
    StylePropsType,
    StylesFunctionOrStubType,
} from '../type';
import { Indexed } from '../../type';

type DialogContentEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* DialogContent component prop type */
export type DialogContentPropsType = DialogContentEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        DialogContentStylesPropsType
    >;

export type DialogContentStylesPropsType = {
    Root?: StylesFunctionOrStubType<DialogContentEffectivePropsType>;
    // add style properties for other nodes here
};

/* DialogContent Root node prop type */
export type DialogContentRootPropsType = DialogContentEffectivePropsType &
    StyleNodePropsType<DialogContentEffectivePropsType>;
