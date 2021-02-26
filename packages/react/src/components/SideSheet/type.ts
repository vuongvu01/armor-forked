import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';
import { ComponentBehaviourOpenStateType } from '../../system/types/ComponentBehaviourOpenStateType';
import { ComponentBehaviourOverlayType } from '../../system/types/ComponentBehaviourOverlayType';
import { ComponentBehaviourPortalType } from '../../system/types/ComponentBehaviourPortalType';
import { ChildrenType, ObjectLiteralType } from '../../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disableOverlay?: boolean;
    wide?: boolean;
};

export type SideSheetEffectivePropsType = Partial<{
    disableEffects: boolean;
    disableOverlay: boolean;
    enableWindowScrollBlock: boolean;
    isCloseButtonVisible: boolean;
    isFixed: boolean;
    wide: boolean;
    disableCloseByEscape: boolean;
    children: ChildrenType;
}> &
    ComponentBehaviourOpenStateType &
    ComponentBehaviourOverlayType &
    ComponentBehaviourPortalType &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType &
    ObjectLiteralType;

export type ClassOverrideType = {
    Body: string;
    CloseIcon: string;
    Root: string;
    Content: string;
    Footer: string;
    Header: string;
    HeaderContainer: string;
    Overlay: string;
};

export type SideSheetPropsType = SideSheetEffectivePropsType;

export type SideSheetRootPropsType = {
    zIndex: number;
} & ComponentElementStylePropsType;

export type SideSheetContainerPropsType = Pick<
    SideSheetEffectivePropsType,
    'disableEffects' | 'display' | 'effectToggle' | 'theme' | 'wide'
>;

export type SideSheetContentPropsType = Pick<
    SideSheetEffectivePropsType,
    'theme'
>;

export type SideSheetHeaderContainerPropsType = Pick<
    SideSheetEffectivePropsType,
    'theme'
>;

export type SideSheetHeaderCloseButtonContainerPropsType = Pick<
    SideSheetEffectivePropsType,
    'theme'
>;

export type SideSheetHeaderCloseButtonContentPropsType = Pick<
    SideSheetEffectivePropsType,
    'theme'
>;
