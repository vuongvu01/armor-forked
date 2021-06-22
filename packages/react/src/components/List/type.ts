import { HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { ObjectLiteralType } from '../../type';

/** 👉 PROPS TYPE */
type ListEffectivePropsType = Partial<{
    small: boolean;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    ObjectLiteralType;

export type ListPropsType = ListEffectivePropsType & ComponentStylePropsType;

export type ListRootPropsType = ListEffectivePropsType &
    ComponentElementStylePropsType;
