import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';

/** 👉 PROPS TYPE */
type DividerEffectivePropsType = Partial<{
    horizontal: boolean;
    vertical: boolean;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type DividerPropsType = DividerEffectivePropsType &
    ComponentStylePropsType;

export type DividerRootPropsType = DividerEffectivePropsType &
    ComponentElementStylePropsType;
