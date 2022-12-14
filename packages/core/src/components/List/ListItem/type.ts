import { HTMLAttributes, ReactNode } from 'react';
import {
    MarginPropsType,
    ComponentBehaviourLinkType,
    ComponentBehaviourCustomTagType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

/** 👉 PROPS TYPE */
type ListItemEffectivePropsType = Partial<{
    /** If set to *true*, the list item will be rendered as *disabled* */
    disabled: boolean;
    /** Allows interaction on ListItems with a @disabled look */
    inactive: boolean;
    /** If provided, the icon will be rendered to the left of primary content */
    primaryIcon: ReactNode;
    /** If provided, the list item will have secondary text on the right */
    secondaryItemText: ReactNode | string;
    /** It defines the size of list item, could be small, medium or large */
    size: 'small' | 'medium' | 'large';
    isLink: boolean;
    /** If set to *true*, the list item will be rendered as having a bottom border */
    divider: boolean;
    /** If provided, the list item will have multiline with lead title */
    lead: string;
    /** If provided, the list item will have multiline with subtitle */
    subtitle: string;
    /** If set to *false*, the list item will be rendered without the secondary part on the right */
    enableSecondaryItem: boolean;
    /** If set to *true*, the list item will be rendered as a link */
    enableLink: boolean;
    /** Accepts an element. The element will be cloned and rendered in-place */
    actions: ReactNode;
    primaryIconWrapper: boolean;
    primaryIconBackgroundColor: string;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    ComponentBehaviourLinkType &
    ComponentBehaviourCustomTagType &
    MarginPropsType;

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
