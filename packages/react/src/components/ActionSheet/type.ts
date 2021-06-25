import { HTMLAttributes, ReactChild } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';
import { MarginAttributesType, WidthAttributesType } from '../../system';

/** 👉 PROPS TYPE */
type ActionSheetEffectivePropsType = Partial<{
    label?: ReactChild;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    WidthAttributesType &
    MarginAttributesType;

export type ActionSheetPropsType = ActionSheetEffectivePropsType &
    ComponentStylePropsType;

export type ActionSheetRootPropsType = ActionSheetEffectivePropsType &
    ComponentElementStylePropsType;

export type ActionSheetLabelContainerPropsType = ActionSheetEffectivePropsType &
    ComponentElementStylePropsType;

// export type ActionSheetSubNodePropsType = {} & ComponentElementStylePropsType;
