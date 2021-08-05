import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';
import { ComponentBehaviourModalDialogType } from '../../system/types/ComponentBehaviourModalDialogType';
import { ChildrenType, ScaleType } from '../../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disableOverlay?: boolean;
    wide?: boolean;
};

/** 👉 PROPS TYPE */
export type SideSheetEffectivePropsType = Partial<{
    isCloseButtonVisible: boolean;
    isFixed: boolean;
    wide: boolean;
    children: ChildrenType;
    effectToggle: boolean;

    /**
     * Sets the scale of the SizeSheet.
     */
    scale: ScaleType;

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
} & Pick<SideSheetEffectivePropsType, 'scale' | 'wide'> &
    ComponentElementStylePropsType;

export type SideSheetContentPropsType = ComponentElementStylePropsType;

export type SideSheetHeaderContainerPropsType = ComponentElementStylePropsType;
