import { HTMLAttributes, ReactNode } from 'react';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../../type';
import { PaddingAttributesType } from '../../../system';

type DialogTitleEffectivePropsType = Partial<{
    description: ReactNode;
    // add other custom properties here
}> &
    PaddingAttributesType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* DialogTitle component prop type */
export type DialogTitlePropsType = DialogTitleEffectivePropsType &
    ComponentStylePropsType;

/* DialogTitle Root node prop type */
export type DialogTitleRootPropsType = DialogTitleEffectivePropsType &
    ComponentElementStylePropsType;

/* DialogTitle Text node prop type */
export type DialogTitleTextPropsType = ComponentElementStylePropsType;

/* DialogTitle Description node prop type */
export type DialogTitleDescriptionPropsType = ComponentElementStylePropsType;
