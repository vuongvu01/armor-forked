import { HTMLAttributes } from 'react';

import { Indexed } from '../../type';
import { MarginAttributesType } from '../../system';
import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

type PaperEffectivePropsType = Indexed<{
    // add other custom properties here
}> &
    MarginAttributesType &
    HTMLAttributes<HTMLDivElement>; // includes all HTML Div attributes

/* Paper component prop type */
export type PaperPropsType = PaperEffectivePropsType & ComponentStylePropsType;

/* Paper Root node prop type */
export type PaperRootPropsType = PaperEffectivePropsType &
    ComponentElementStylePropsType;
