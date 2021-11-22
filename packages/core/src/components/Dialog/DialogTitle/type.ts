import { HTMLAttributes, ReactNode } from 'react';
import { PaddingPropsType } from '@deliveryhero/armor-system';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../../type';

type DialogTitleEffectivePropsType = Partial<{
    description: ReactNode;
    // add other custom properties here
}> &
    PaddingPropsType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div properties

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
