import { HTMLAttributes, ReactNode } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system/attributes';
import { ObjectLiteralType } from '../../../type';

/** 👉 PROPS TYPE */
type ListItemEffectivePropsType = Partial<{
    // exampleProperty: boolean;
    // add other custom properties here
    disabled: boolean;
    primaryIcons: ReactNode;
    enablePrimaryIcons: boolean;
    enableActions: boolean;
    secondaryItemText: string;
    size: 'small' | 'medium' | 'large';
    isLink: boolean;
    divider: boolean;
    lead: string;
    subtitle: string;
    enableSecondaryItem: boolean;
    enableLink: boolean;
    actions: ReactNode;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType &
    ObjectLiteralType;

export type ListItemPropsType = ListItemEffectivePropsType &
    ComponentStylePropsType;

export type ListItemRootPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type PrimaryIconsContainerPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type ActionsContainerPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type LeadSubtitlePropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type PrimaryListItemContainerPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type SecondaryListItemPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;
