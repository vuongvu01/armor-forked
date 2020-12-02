import { InputHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';
import { ComponentElementStylePropsType } from '../type';

export type ClassBasedOnComponentType = {
    component: string;
    classPrefix: string;
    className?: string;

    disabled?: boolean;
    isActive?: boolean;
};

type BadgeEffectivePropsType = Indexed<{}> &
    InputHTMLAttributes<HTMLInputElement> &
    MarginAttributesType;

export type BadgePropsType = BadgeEffectivePropsType;

export type BadgeRootPropsType = BadgeEffectivePropsType &
    ComponentElementStylePropsType;
