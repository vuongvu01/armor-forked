import { HTMLAttributes, ReactNode } from 'react';

import { Indexed } from 'src/type';
import {
    NodeStylePropsType,
    StylePropsType,
    StylesFunctionOrStubType,
} from '../type';

type DialogTitleEffectivePropsType = Indexed<{
    description?: ReactNode;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* DialogTitle component prop type */
export type DialogTitlePropsType = DialogTitleEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            Text?: string;
            Description?: string;
            // add custom className for other nodes here
        },
        DialogTitleStylesPropsType
    >;

export type DialogTitleStylesPropsType = {
    Root?: StylesFunctionOrStubType<DialogTitleEffectivePropsType>;
    Text?: StylesFunctionOrStubType<{}>;
    Description?: StylesFunctionOrStubType<{}>;
    // add style properties for other nodes here
};

/* DialogTitle Root node prop type */
export type DialogTitleRootPropsType = DialogTitleEffectivePropsType &
    NodeStylePropsType<DialogTitleEffectivePropsType>;

/* DialogTitle Text node prop type */
export type DialogTitleTextPropsType = NodeStylePropsType;

/* DialogTitle Description node prop type */
export type DialogTitleDescriptionPropsType = NodeStylePropsType;
