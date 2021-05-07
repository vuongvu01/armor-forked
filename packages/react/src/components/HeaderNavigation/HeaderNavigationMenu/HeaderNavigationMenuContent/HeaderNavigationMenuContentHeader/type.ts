import { HTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../../../../system';
import { ScalarType } from '../../../../../type';
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
    MarginAttributesType;

export type HeaderNavigationMenuContentHeaderPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType;

export type HeaderNavigationMenuContentHeaderRootPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationMenuContentHeaderTitlePropsType = {
    label: boolean;
} & ComponentElementStylePropsType;
