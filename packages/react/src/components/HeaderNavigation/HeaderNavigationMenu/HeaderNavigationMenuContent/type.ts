import { HTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../../../system/attributes';
import { Indexed, ScalarType } from '../../../../type';
import { ClassNamesType, NodeStylePropsType } from '../../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

type HeaderNavigationMenuContentEffectivePropsType = Indexed<{}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationMenuContentPropsType = HeaderNavigationMenuContentEffectivePropsType;

export type HeaderNavigationMenuContentRootPropsType = HeaderNavigationMenuContentEffectivePropsType &
    NodeStylePropsType<HeaderNavigationMenuContentEffectivePropsType>;

type HeaderNavigationMenuContentHeaderEffectivePropsType = Indexed<{
    title?: string;
    label?: string;
    image?: ReactNode;
    selectedValue?: ScalarType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationMenuContentHeaderPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType;

export type HeaderNavigationMenuContentBodyOptionsItemPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType;

export type HeaderNavigationMenuContentBodyOptionsCategoryPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType;

export type HeaderNavigationMenuContentContextType = {
    isExpanded?: boolean;
    setIsExpanded?: (isExpanded: boolean) => void;
};
