import { HTMLAttributes } from 'react';
import { ComponentStylePropsType } from '../../type';
import { MarginAttributesType } from '../../../system';

/** 👉 PROPS TYPE */
type PrimaryIconWrapperEffectivePropsType = Partial<{
    disabled: boolean;
    primaryIconBackgroundColor: string;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

export type PrimaryIconWrapperPropsType = PrimaryIconWrapperEffectivePropsType &
    ComponentStylePropsType;
