import { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../../system/attributes';
import { Indexed } from '../../../../type';
import { ComponentElementStylePropsType } from '../../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

export type LinkTagType = string | ComponentType<any>;

type HeaderNavigationLinkEffectivePropsType = Indexed<{
    isActive?: boolean;
    name?: string;
    to?: string;
    tag?: LinkTagType;
}> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationLinkPropsType = HeaderNavigationLinkEffectivePropsType;

export type HeaderNavigationLinkRootPropsType = HeaderNavigationLinkPropsType &
    ComponentElementStylePropsType;
