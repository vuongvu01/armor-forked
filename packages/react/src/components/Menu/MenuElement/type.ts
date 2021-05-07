import { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { MarginAttributesType, PaddingAttributesType } from '../../../system';

type MenuElementEffectivePropsType = Partial<{
    tag: string | ComponentType<any>;
    primary: boolean;
    secondary: boolean;
    tertiary: boolean;
    selected: boolean;
    small: boolean;
    depthLevel: number; // todo: future-reserved

    // expanse handle
    enableExpansionHandle: boolean;
    expanded: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> & // and 3 attributes from HTML Anchor
    PaddingAttributesType &
    MarginAttributesType;

/* MenuElement component prop type */
export type MenuElementPropsType = MenuElementEffectivePropsType &
    ComponentStylePropsType;

/* MenuElement Root node prop type */
export type MenuElementRootPropsType = MenuElementEffectivePropsType &
    ComponentElementStylePropsType;

/* MenuElement Content node prop type */
export type MenuElementContentPropsType = {
    small: boolean;
} & ComponentElementStylePropsType;

/* MenuElement ExpansionHandle node prop type */
export type MenuElementExpansionHandlePropsType = Pick<
    MenuElementEffectivePropsType,
    'expanded' | 'primary' | 'secondary' | 'tertiary' | 'depthLevel'
> &
    ComponentElementStylePropsType;

/* MenuElement ExpansionHandleArrow node prop type */
export type MenuElementExpansionHandleArrowPropsType = Pick<
    MenuElementEffectivePropsType,
    'expanded'
> &
    ComponentElementStylePropsType;
