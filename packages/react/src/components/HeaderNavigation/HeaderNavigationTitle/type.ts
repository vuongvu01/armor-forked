import { AnchorHTMLAttributes, ComponentType, HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';

export type ClassBasedOnComponentType = {
    className?: string;

    classPrefix: string;
    component: string;
};

export type TitleTagType = string | ComponentType<any>;

type HeaderNavigationTitleEffectivePropsType = Indexed<{
    isActive?: boolean;
    name?: string;
    to?: string;
    tag?: TitleTagType;
}> &
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationTitlePropsType = HeaderNavigationTitleEffectivePropsType;

export type HeaderNavigationTitleRootPropsType = HeaderNavigationTitleEffectivePropsType;
