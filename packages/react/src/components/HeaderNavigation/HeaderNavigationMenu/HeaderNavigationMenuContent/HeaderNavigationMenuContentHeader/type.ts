import { HTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../../../../system/attributes';
import { Indexed, ScalarType } from '../../../../../type';
import { ClassNamesType, NodeStylePropsType } from '../../../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};
type HeaderNavigationMenuContentHeaderEffectivePropsType = Indexed<{
    title?: string;
    label?: string;
    image?: ReactNode;
    selectedValue?: ScalarType;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationMenuContentHeaderPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType;

export type HeaderNavigationMenuContentHeaderRootPropsType = HeaderNavigationMenuContentHeaderEffectivePropsType &
    NodeStylePropsType<HeaderNavigationMenuContentHeaderEffectivePropsType>;
