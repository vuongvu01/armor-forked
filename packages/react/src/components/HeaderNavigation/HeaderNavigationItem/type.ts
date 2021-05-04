import { HTMLAttributes } from 'react';
import { ComponentElementStylePropsType } from '../../type';

type HeaderNavigationItemEffectivePropsType = HTMLAttributes<HTMLElement>;

export type HeaderNavigationItemPropsType = HeaderNavigationItemEffectivePropsType &
    ComponentElementStylePropsType;

export type HeaderNavigationItemRootPropsType = HeaderNavigationItemEffectivePropsType &
    ComponentElementStylePropsType;
