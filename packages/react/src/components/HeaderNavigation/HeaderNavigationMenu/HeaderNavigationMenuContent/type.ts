import { HTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../../../system';
import { ScalarType } from '../../../../type';
import { ComponentElementStylePropsType } from '../../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type HeaderNavigationMenuContentEffectivePropsType = HTMLAttributes<
    HTMLElement
> &
    MarginAttributesType;

export type HeaderNavigationMenuContentPropsType = HeaderNavigationMenuContentEffectivePropsType;

export type HeaderNavigationMenuContentRootPropsType = HeaderNavigationMenuContentEffectivePropsType &
    ComponentElementStylePropsType;

type HeaderNavigationMenuContentHeaderEffectivePropsType = Partial<{
    title: string;
    label: string;
    image: ReactNode;
    selectedValue: ScalarType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationMenuContentHeaderPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType;

export type HeaderNavigationMenuContentBodyOptionsItemPropsType = {
    isActive: boolean;
} & ComponentElementStylePropsType;

export type HeaderNavigationMenuContentBodyOptionsCategoryPropsType = ComponentElementStylePropsType;

export type HeaderNavigationMenuContentContextType = {
    isExpanded?: boolean;
    setIsExpanded?: (isExpanded: boolean) => void;
};
