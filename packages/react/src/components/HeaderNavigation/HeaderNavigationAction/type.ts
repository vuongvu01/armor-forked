import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system/attributes';
import { Indexed } from '../../../type';
import { ClassNamesType, NodeStylePropsType } from '../../type';

export type ClassBasedOnComponentType = {
    className?: string;
    classNames?: ClassNamesType;
    classPrefix: string;
    component: string;
};

type HeaderNavigationActionEffectivePropsType = Indexed<{}> &
    HTMLAttributes<HTMLElement> &
    MarginAttributesType;

export type HeaderNavigationActionPropsType = HeaderNavigationActionEffectivePropsType;

export type HeaderNavigationActionRootPropsType = HeaderNavigationActionEffectivePropsType &
    NodeStylePropsType<HeaderNavigationActionEffectivePropsType>;

export type HeaderNavigationActionContainerPropsType = HeaderNavigationActionEffectivePropsType &
    NodeStylePropsType<HeaderNavigationActionEffectivePropsType>;

export type HeaderNavigationActionItemPropsType = HeaderNavigationActionEffectivePropsType;

export type HeaderNavigationActionItemRootPropsType = HeaderNavigationActionEffectivePropsType &
    NodeStylePropsType<HeaderNavigationActionEffectivePropsType>;
