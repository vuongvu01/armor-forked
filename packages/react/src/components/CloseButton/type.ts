import { HTMLAttributes } from 'react';
import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';

/** 👉 PROPS TYPE */
export type CloseButtonEffectivePropsType = HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type CloseButtonPropsType = CloseButtonEffectivePropsType;

export type CloseButtonRootPropsType = CloseButtonEffectivePropsType &
    ComponentElementStylePropsType;
