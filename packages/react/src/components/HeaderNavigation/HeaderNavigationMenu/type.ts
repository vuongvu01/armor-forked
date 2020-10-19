import { HTMLAttributes, ReactNode, Ref } from 'react';

import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';
import { ClassNamesType, NodeStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

type HeaderNavigationMenuEffectivePropsType = Indexed<{
    headerTitle?: ReactNode;
    headerContent?: ReactNode;
    isMenuExpanded?: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type UseHeaderNavigationMenuPropsType = Indexed<{
    internalRef?: Ref<unknown>;
    isExpanded?: boolean;
    setIsExpanded?: (isExpanded: boolean) => void;
}>;

export type HeaderNavigationMenuPropsType = HeaderNavigationMenuEffectivePropsType;

export type HeaderNavigationMenuRootPropsType = HeaderNavigationMenuEffectivePropsType &
    NodeStylePropsType<HeaderNavigationMenuEffectivePropsType>;
