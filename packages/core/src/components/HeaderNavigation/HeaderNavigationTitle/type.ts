import { HTMLAttributes } from 'react';
import {
    MarginPropsType,
    ComponentBehaviourCustomTagType,
    ComponentBehaviourLinkType,
} from '@deliveryhero/armor-system';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type HeaderNavigationTitleEffectivePropsType = Partial<{
    isActive: boolean;
    name: string;
    onLinkClick: (name: string) => void;
}> &
    ComponentBehaviourLinkType &
    ComponentBehaviourCustomTagType &
    HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type HeaderNavigationTitlePropsType =
    HeaderNavigationTitleEffectivePropsType;

export type HeaderNavigationTitleRootPropsType =
    HeaderNavigationTitleEffectivePropsType;
