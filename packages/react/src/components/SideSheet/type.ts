import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed, ChildrenType } from '../../type';
import { ModalPropsType } from '../Modal/type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disableOverlay?: boolean;
    wide?: boolean;
};

export type SideSheetEffectivePropsType = Indexed<{
    children?: ChildrenType;
    disableEffects?: boolean;
    disableOverlay?: boolean;
    isCloseButtonVisible?: boolean;
    isFixed?: boolean;
    wide?: boolean;
}> &
    Pick<
        ModalPropsType,
        'open' | 'onClose' | 'zIndex' | 'disableCloseByEscape'
    > & // includes two props from Modal
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

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
