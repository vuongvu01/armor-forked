import { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../../system/attributes';
import { Indexed } from '../../../../type';
import { ClassNamesType, NodeStylePropsType } from '../../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
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
    NodeStylePropsType<HeaderNavigationLinkPropsType>;
