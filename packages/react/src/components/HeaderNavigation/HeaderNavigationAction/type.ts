import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';
import { ComponentElementStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classPrefix: string;
    component: string;
};

type HeaderNavigationActionEffectivePropsType = Indexed<{}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationActionPropsType = HeaderNavigationActionEffectivePropsType;

export type HeaderNavigationActionRootPropsType = HeaderNavigationActionEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationActionContainerPropsType = HeaderNavigationActionEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationActionItemPropsType = HeaderNavigationActionEffectivePropsType;

export type HeaderNavigationActionItemRootPropsType = HeaderNavigationActionEffectivePropsType &
    ComponentElementStylePropsType;
