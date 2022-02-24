import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
};

type HeaderNavigationActionEffectivePropsType = HTMLAttributes<HTMLElement> &
    MarginPropsType;

export type HeaderNavigationActionPropsType =
    HeaderNavigationActionEffectivePropsType;

export type HeaderNavigationActionRootPropsType =
    HeaderNavigationActionEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationActionContainerPropsType =
    HeaderNavigationActionEffectivePropsType & ComponentElementStylePropsType;

export type HeaderNavigationActionItemPropsType =
    HeaderNavigationActionEffectivePropsType;

export type HeaderNavigationActionItemRootPropsType =
    HeaderNavigationActionEffectivePropsType & ComponentElementStylePropsType;
