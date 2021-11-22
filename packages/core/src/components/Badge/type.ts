import { HTMLAttributes } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    isActive?: boolean;
};

/** 👉 PROPS TYPE */
type BadgeEffectivePropsType = HTMLAttributes<HTMLDivElement> & MarginPropsType;

export type BadgePropsType = BadgeEffectivePropsType;

export type BadgeRootPropsType = BadgeEffectivePropsType &
    ComponentElementStylePropsType;
