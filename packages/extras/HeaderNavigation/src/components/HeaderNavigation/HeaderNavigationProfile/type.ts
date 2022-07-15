import { HTMLAttributes, ReactNode } from 'react';
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
            /** Callback function triggered after a selected value is changed */
            onSelectedValueChange: (value: DropdownValueType) => void;
            /** Selected value for selector in profile dropdown */
            selectedValue: DropdownValueType;
            /** User name initials string displayed on profile menu button */
            usernameInitials: string;
            /** Menu links that are rendered as children inside profile menu dropdown below selector */
            menuLinks: HeaderNavigationProfileMenuLink[];
            /** Selector dropdown options */
            selectorOptions: string[] | OptionItemType[];
            /** Selector dropdown label */
            selectorLabel: string;
            /** Open dropdown flag for controlled mode - will impact the open / close state of dropdown */
            open: boolean;
            /** Callback to fire in case of controlled mode when dropdown is close */
            onOpenChange: (openValue: boolean) => void;
        }>;

export type HeaderNavigationProfileRootPropsType =
    HeaderNavigationProfileEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationProfileWrapperPropsType =
    HeaderNavigationProfileEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationProfileMenuItemPropsType =
    HeaderNavigationProfileEffectivePropsType &
        Partial<{
            /** Label text for Menu link */
            linkLabel: ReactNode | string;
            /** On click callback function */
            linkAction: () => void;
            /** Bottom Separator rendered after each item */
            separator: boolean;
            /** unique id */
            id: ScalarType;
            /** Href link value - If this value is provided the Menu Link will be rendered as an anchor HTML tag */
            href: string;
            /** Where to display the linked URL - _self, _blank, _parent, _top */
            target: string;
        }>;

export type HeaderNavigationProfileMenuItemRootPropsType =
    HeaderNavigationProfileEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationProfileButtonPropsType =
    HeaderNavigationProfileEffectivePropsType &
        Partial<{
            usernameInitials: string;
            open: boolean;
        }>;
export type HeaderNavigationProfileButtonRootPropsType =
    HeaderNavigationProfileEffectivePropsType &
        ComponentElementStylePropsType &
        HeaderNavigationProfileButtonPropsType;
export type HeaderNavigationProfileButtonTextPropsType =
    ComponentElementStylePropsType;
export type HeaderNavigationProfileMenuLink = {
    linkLabel: ReactNode | string;
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
    open: boolean;
    onOpenChange: (openValue: boolean) => void;
}>;
