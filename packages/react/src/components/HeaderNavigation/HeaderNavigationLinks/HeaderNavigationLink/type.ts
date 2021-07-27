import { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../../system';
import { ComponentElementStylePropsType } from '../../../type';
import { HeaderNavigationLinksContextType } from '../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

export type LinkTagType = string | ComponentType<any>;

type Action = (m?: any) => boolean;
export type ActionOrBoolean = Action | boolean;

type HeaderNavigationLinkEffectivePropsType = Partial<{
    isActive: ActionOrBoolean;
    name: string;
    to: string;
    tag: LinkTagType;
}> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationLinkHookPropsType = HeaderNavigationLinkEffectivePropsType & {
    headerNavigationLinksContext: HeaderNavigationLinksContextType;
};

export type HeaderNavigationLinkPropsType = HeaderNavigationLinkEffectivePropsType;

export type HeaderNavigationLinkRootPropsType = HeaderNavigationLinkPropsType &
    ComponentElementStylePropsType;
