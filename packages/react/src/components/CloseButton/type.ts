import { HTMLAttributes } from 'react';
import { SizeAttributesType } from '../../system/attributes';
import { ObjectLiteralType } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type CloseButtonEffectivePropsType = Partial<{}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    SizeAttributesType &
    ObjectLiteralType;

export type CloseButtonRootPropsType = CloseButtonEffectivePropsType &
    ComponentElementStylePropsType;
