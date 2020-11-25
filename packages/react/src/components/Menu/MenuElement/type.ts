import { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import {
    MarginAttributesType,
    PaddingAttributesType,
} from '../../../system/attributes';
import { Indexed } from '../../../type';

type MenuElementEffectivePropsType = Indexed<{
    tag?: string | ComponentType<any>;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    selected?: boolean;
    depthLevel?: number; // todo: future-reserved

    // expanse handle
    enableExpansionHandle?: boolean;
    expanded?: boolean;
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
export type MenuElementContentPropsType = {} & ComponentElementStylePropsType;

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
