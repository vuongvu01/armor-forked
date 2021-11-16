import { HTMLAttributes, ReactChild, ReactElement } from 'react';
import {
    SizePropsType,
    PopperPropsType,
    PaddingPropsType,
    ComponentBehaviourOpenStateType,
    ComponentBehaviourOverlayType,
    ComponentBehaviourPortalType,
    ScalarType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

export type ContextMenuElement = {
    label: ReactChild;
    id: ScalarType;
    props?: HTMLAttributes<HTMLElement>;
};

type ContextMenuExtras = {
    closeMenu: () => void;
};

/** 👉 PROPS TYPE */
type ContextMenuEffectivePropsType = Partial<{
    /** Accepts an element as a trigger for the context menu. The element will be cloned and rendered in-place. */
    trigger: ReactElement;
    /**
     * If defined, an actual menu will be rendered inside of the dropdown panel. Otherwise, to fill out the contents of the panel the **children** property will be used.
     * @armor-docs-expand ContextMenuElement
     */
    menuElements: ContextMenuElement[];
    /**
     * Is called when a click happens on one of the menu elements. It works only if the property *menuElements* was also specified. The third argument contains a *closeMenu* callback that allows closing the menu as soon as the client code finishes processing the event.
     * @armor-docs-expand ContextMenuElement, ContextMenuExtras
     * */
    onMenuElementSelect: (
        elementId: ScalarType,
        element: ContextMenuElement,
        extras: ContextMenuExtras,
    ) => void;
    /**
     * Gets called when the open/close state is changed.
     * @deprecated
     * @see onOpenChange
     * */
    onToggle: (open: boolean) => void;
    // add other custom properties here
}> &
    PopperPropsType &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    SizePropsType &
    PaddingPropsType;

/* ContextMenu component prop type */
export type ContextMenuPropsType = ContextMenuEffectivePropsType &
    ComponentStylePropsType;

/* ContextMenu Root node prop type */
export type ContextMenuRootPropsType = ContextMenuEffectivePropsType & {
    displayMenuElements: boolean;
} & ComponentElementStylePropsType;

/* ContextMenu SubNode node prop type */
export type ContextMenuSubNodePropsType = {} & ComponentElementStylePropsType;
