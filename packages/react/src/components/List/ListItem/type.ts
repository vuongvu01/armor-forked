import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType } from '../../../system';

/** 👉 PROPS TYPE */
type ListItemEffectivePropsType = Partial<{
    // add other custom properties here
    disabled: boolean;
    primaryIcon: ReactNode;
    secondaryItemText: string;
    size: 'small' | 'medium' | 'large';
    isLink: boolean;
    divider: boolean;
    lead: string;
    subtitle: string;
    enableSecondaryItem: boolean;
    enableLink: boolean;
    actions: ReactNode;
    primaryIconWrapper: boolean;
    primaryIconBackgroundColor: string;
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> & // and 3 attributes from HTML Anchor
    MarginAttributesType;

export type ListItemPropsType = ListItemEffectivePropsType &
    ComponentStylePropsType;

export type ListItemRootPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type PrimaryIconContainerPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type ActionsContainerPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type LeadSubtitlePropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type PrimaryListItemContainerPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;

export type SecondaryListItemPropsType = ListItemEffectivePropsType &
    ComponentElementStylePropsType;
