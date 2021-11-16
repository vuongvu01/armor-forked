import { HTMLAttributes } from 'react';
import {
    MarginPropsType,
    ComponentBehaviourCustomTagType,
    ComponentBehaviourLinkType,
} from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../../../type';
import { HeaderNavigationLinksContextType } from '../type';

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
    MarginPropsType;

export type HeaderNavigationLinkHookPropsType = HeaderNavigationLinkEffectivePropsType & {
    headerNavigationLinksContext: HeaderNavigationLinksContextType;
};

export type HeaderNavigationLinkPropsType = HeaderNavigationLinkEffectivePropsType;

export type HeaderNavigationLinkRootPropsType = HeaderNavigationLinkPropsType &
    ComponentElementStylePropsType;
