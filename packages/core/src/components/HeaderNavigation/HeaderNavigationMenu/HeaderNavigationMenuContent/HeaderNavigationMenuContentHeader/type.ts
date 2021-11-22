import { HTMLAttributes, ReactNode } from 'react';
import { MarginPropsType, ScalarType } from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../../../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};
type HeaderNavigationMenuContentHeaderEffectivePropsType = Partial<{
    title: string;
    label: string;
    image: ReactNode;
    selectedValue: ScalarType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type HeaderNavigationMenuContentHeaderPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType;

export type HeaderNavigationMenuContentHeaderRootPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationMenuContentHeaderTitlePropsType = {
    label: boolean;
} & ComponentElementStylePropsType;
