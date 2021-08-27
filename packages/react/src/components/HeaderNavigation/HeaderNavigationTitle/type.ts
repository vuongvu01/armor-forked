import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system';
import { ComponentBehaviourCustomTagType } from '../../../system/types/ComponentBehaviourCustomTagType';
import { ComponentBehaviourLinkType } from '../../../system/types/ComponentBehaviourLinkType';

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
    MarginAttributesType;

export type HeaderNavigationTitlePropsType = HeaderNavigationTitleEffectivePropsType;

export type HeaderNavigationTitleRootPropsType = HeaderNavigationTitleEffectivePropsType;
