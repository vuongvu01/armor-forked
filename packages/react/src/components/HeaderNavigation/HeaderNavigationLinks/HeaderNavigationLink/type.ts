import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../../system';
import { ComponentElementStylePropsType } from '../../../type';
import { HeaderNavigationLinksContextType } from '../type';
import { ComponentBehaviourCustomTagType } from '../../../../system/types/ComponentBehaviourCustomTagType';
import { ComponentBehaviourLinkType } from '../../../../system/types/ComponentBehaviourLinkType';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

type Action = (m?: any) => boolean;
export type ActionOrBoolean = Action | boolean;

type HeaderNavigationLinkEffectivePropsType = Partial<{
    isActive: ActionOrBoolean;
    name: string;
}> &
    ComponentBehaviourLinkType &
    ComponentBehaviourCustomTagType &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationLinkHookPropsType = HeaderNavigationLinkEffectivePropsType & {
    headerNavigationLinksContext: HeaderNavigationLinksContextType;
};

export type HeaderNavigationLinkPropsType = HeaderNavigationLinkEffectivePropsType;

export type HeaderNavigationLinkRootPropsType = HeaderNavigationLinkPropsType &
    ComponentElementStylePropsType;
