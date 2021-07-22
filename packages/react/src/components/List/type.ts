import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType, WidthAttributesType } from '../../system';

/** 👉 PROPS TYPE */
type ListEffectivePropsType = Partial<{
    small: boolean;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    WidthAttributesType &
    MarginAttributesType;

export type ListPropsType = ListEffectivePropsType & ComponentStylePropsType;

export type ListRootPropsType = ListEffectivePropsType &
    ComponentElementStylePropsType;
