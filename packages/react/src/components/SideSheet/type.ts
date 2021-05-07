import { Component, HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';
import { ComponentBehaviourModalDialogType } from '../../system/types/ComponentBehaviourModalDialogType';
import { ChildrenType } from '../../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disableOverlay?: boolean;
    wide?: boolean;
};

export type SideSheetEffectivePropsType = Partial<{
    isCloseButtonVisible: boolean;
    isFixed: boolean;
    wide: boolean;
    children: ChildrenType;
    effectToggle: boolean;

    /** @deprecated @see enableEffects */
    disableEffects: boolean;
    /** @deprecated @see enableOverlay */
    disableOverlay: boolean;
    /** @deprecated @see enableCloseByEscape */
    disableCloseByEscape: boolean;

    /** @deprecated */
    onClose: () => void;

    // add other custom properties here
}> &
    ComponentBehaviourModalDialogType &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type ClassOverrideType = {
    Body: string;
    Root: string;
    Content: string;
    Footer: string;
    Header: string;
    HeaderContainer: string;
    Backdrop: string;
};

export type SideSheetPropsType = SideSheetEffectivePropsType;

export type SideSheetRootPropsType = {
    zIndex: number;
} & ComponentElementStylePropsType;

export type SideSheetContainerPropsType = {
    disableEffects: boolean;
    effectToggle: boolean;
    wide?: boolean;
} & ComponentElementStylePropsType;

export type SideSheetContentPropsType = ComponentElementStylePropsType;

export type SideSheetHeaderContainerPropsType = ComponentElementStylePropsType;
