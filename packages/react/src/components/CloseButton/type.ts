import { HTMLAttributes } from 'react';
import { SizeAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';

export type CloseButtonEffectivePropsType = Partial<{
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    SizeAttributesType;

export type CloseButtonRootPropsType = CloseButtonEffectivePropsType &
    ComponentElementStylePropsType;
