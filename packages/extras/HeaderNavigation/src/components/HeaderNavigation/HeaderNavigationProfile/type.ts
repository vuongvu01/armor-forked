import { HTMLAttributes, ReactChild } from 'react';
import { MarginPropsType, ScalarType } from '@deliveryhero/armor-system';

import { DropdownValueType, OptionItemType } from '@deliveryhero/armor';
import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
};

type HeaderNavigationProfileEffectivePropsType = HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type HeaderNavigationProfilePropsType =
    HeaderNavigationProfileEffectivePropsType &
        Partial<{
            onSelectedValueChange: (value: DropdownValueType) => void;
            selectedValue: DropdownValueType;
            usernameInitials: string;
            menuLinks: HeaderNavigationProfileMenuLink[];
            selectorOptions: string[] | OptionItemType[];
            selectorLabel: string;
        }>;

export type HeaderNavigationProfileRootPropsType =
    HeaderNavigationProfileEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationProfileWrapperPropsType =
    HeaderNavigationProfileEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationProfileMenuItemPropsType =
    HeaderNavigationProfileEffectivePropsType &
        Partial<{
            linkLabel: string;
            linkAction: () => void;
            separator: boolean;
            id: ScalarType;
            href: string;
            target: string;
        }>;

export type HeaderNavigationProfileMenuItemRootPropsType =
    HeaderNavigationProfileEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationProfileButtonRootPropsType =
    HeaderNavigationProfileEffectivePropsType & ComponentElementStylePropsType;
export type HeaderNavigationProfileButtonTextPropsType =
    ComponentElementStylePropsType;
export type HeaderNavigationProfileButtonPropsType =
    HeaderNavigationProfileEffectivePropsType &
        Partial<{
            usernameInitials: string;
        }>;
export type HeaderNavigationProfileMenuLink = {
    linkLabel: ReactChild | string;
    id: ScalarType;
    linkAction?: () => void;
    href?: string;
    target?: string;
};
export type HeaderNavigationProfileMenuPropsType = Partial<{
    menuLinks: HeaderNavigationProfileMenuLink[];
    selectorOptions: string[] | OptionItemType[];
    selectorLabel: string;
    onSelectedValueChange: (value: DropdownValueType) => void;
    selectedValue: DropdownValueType;
}> &
    HeaderNavigationProfileEffectivePropsType;
export type HeaderNavigationProfileMenuRootPropsType =
    HeaderNavigationProfileEffectivePropsType & ComponentElementStylePropsType;

export type UseHeaderNavigationProfileProps = Partial<{
    onSelectedValueChange: (value: DropdownValueType) => void;
    selectedValue: DropdownValueType;
}>;
