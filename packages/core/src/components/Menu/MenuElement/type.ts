import { HTMLAttributes } from 'react';
import {
    MarginPropsType,
    PaddingPropsType,
    ComponentBehaviourCustomTagType,
    ComponentBehaviourLinkType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type MenuElementEffectivePropsType = Partial<{
    /** If set to *true*, the MenuElement will be rendered as *primary*. This is the default even if the property is not set */
    primary: boolean;
    /** If set to *true*, the MenuElement will be rendered as *secondary* */
    secondary: boolean;
    /** If set to *true*, the MenuElement will be rendered as *tertiary*. */
    tertiary: boolean;
    /** If set to *true*, the MenuElement will be rendered as *selected* */
    selected: boolean;
    /** If set to *true*, the MenuElement will be rendered as *small* (with reduced paddings and typography). This property works only if the MenuElement is neither *secondary* nor *tertiary* */
    small: boolean;
    /**
     * @ignore
     */
    depthLevel: number; // todo: future-reserved

    // expanse handle
    /** If set to *true*, the MenuElement will have an expansion handle (a button with an arrow) on the right */
    enableExpansionHandle: boolean;
    /** If set to *true*, the MenuElement expansion handle will be rendered as *expanded*. This property takes effect only if **enableExpansionHandle** property is set to *true* */
    expanded: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    ComponentBehaviourLinkType &
    ComponentBehaviourCustomTagType &
    PaddingPropsType &
    MarginPropsType;

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
