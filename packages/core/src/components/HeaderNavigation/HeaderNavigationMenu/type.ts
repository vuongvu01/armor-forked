import { HTMLAttributes, ReactNode, Ref } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type HeaderNavigationMenuEffectivePropsType = Partial<{
    headerTitle?: ReactNode;
    headerContent?: ReactNode;
    /**
     * @deprecated
     * Use defaultExpanded instead
     */
    isMenuExpanded?: boolean;
    defaultExpanded?: boolean;
}> &
    HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type UseHeaderNavigationMenuPropsType = Partial<{
    internalRef?: Ref<unknown>;

    isExpanded?: boolean;
    setIsExpanded?: (isExpanded: boolean) => void;
}>;

export type HeaderNavigationMenuPropsType = HeaderNavigationMenuEffectivePropsType;

export type HeaderNavigationMenuRootPropsType = HeaderNavigationMenuEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationMenuContentContainerPropsType = {
    isExpanded?: boolean;
} & ComponentElementStylePropsType;
