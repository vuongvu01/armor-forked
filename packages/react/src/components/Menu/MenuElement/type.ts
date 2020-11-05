import { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';
import { StylePropsType, NodeStylePropsTypeNoStyles } from '../../type';
import {
    MarginAttributesType,
    PaddingAttributesType,
} from '../../../system/attributes';
import { Indexed } from '../../../type';

type MenuElementEffectivePropsType = Indexed<{
    tag?: string | ComponentType<any>;
    secondary?: boolean;
    tertiary?: boolean;
    selected?: boolean;

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
    StylePropsType<{
        Root?: string;
        // add custom className for other nodes here
    }>;

/* MenuElement Root node prop type */
export type MenuElementRootPropsType = MenuElementEffectivePropsType &
    NodeStylePropsTypeNoStyles;

/* MenuElement Content node prop type */
export type MenuElementContentPropsType = {} & NodeStylePropsTypeNoStyles;

/* MenuElement ExpansionHandle node prop type */
export type MenuElementExpansionHandlePropsType = {} & NodeStylePropsTypeNoStyles;

/* MenuElement ExpansionHandleArrow node prop type */
export type MenuElementExpansionHandleArrowPropsType = Pick<
    MenuElementEffectivePropsType,
    'expanded'
> &
    NodeStylePropsTypeNoStyles;
