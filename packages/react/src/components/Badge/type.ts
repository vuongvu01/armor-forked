import { HTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    isActive?: boolean;
};

/** 👉 PROPS TYPE */
type BadgeEffectivePropsType = HTMLAttributes<HTMLDivElement> &
    MarginAttributesType;

export type BadgePropsType = BadgeEffectivePropsType;

export type BadgeRootPropsType = BadgeEffectivePropsType &
    ComponentElementStylePropsType;
