import { HTMLAttributes } from 'react';
import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';

/** 👉 PROPS TYPE */
export type CloseButtonEffectivePropsType = Partial<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type CloseButtonPropsType = CloseButtonEffectivePropsType;

export type CloseButtonRootPropsType = CloseButtonEffectivePropsType &
    ComponentElementStylePropsType;
