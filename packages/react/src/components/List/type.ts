import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType, WidthAttributesType } from '../../system';

/** 👉 PROPS TYPE */
type ListEffectivePropsType = Partial<{
    /** If set to *true*, the list font size will be set to 14 otherwise 16 */
    small: boolean;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    WidthAttributesType &
    MarginAttributesType;

export type ListPropsType = ListEffectivePropsType & ComponentStylePropsType;

export type ListRootPropsType = ListEffectivePropsType &
    ComponentElementStylePropsType;
