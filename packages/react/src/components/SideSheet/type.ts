import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed, ChildrenType } from '../../type';
import { ClassNamesType, StylesFunctionOrStubType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;
    classNames?: ClassNamesType;
    disableOverlay?: boolean;
    wide?: boolean;
};

export type SideSheetEffectivePropsType = Indexed<{
    children?: ChildrenType;
    disableEffects?: boolean;
    disableOverlay?: boolean;
    isCloseButtonVisible?: boolean;
    isFixed?: boolean;
    onClose?: () => void;
    open?: boolean;
    wide?: boolean;
    zIndex?: number;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type SideSheetStylesPropsType = {
    Body?: StylesFunctionOrStubType;
    CloseIcon?: StylesFunctionOrStubType;
    Root?: StylesFunctionOrStubType<SideSheetEffectivePropsType>;
    Content?: StylesFunctionOrStubType;
    Footer?: StylesFunctionOrStubType;
    Header?: StylesFunctionOrStubType;
    HeaderContainer?: StylesFunctionOrStubType;
    Overlay?: StylesFunctionOrStubType;
};

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

export type SideSheetContainerPropsType = Pick<
    SideSheetEffectivePropsType,
    'disableEffects' | 'display' | 'effectToggle' | 'ref' | 'theme' | 'wide'
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
