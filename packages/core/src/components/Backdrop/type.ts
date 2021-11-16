import { HTMLAttributes } from 'react';
import { SizePropsType } from '@deliveryhero/armor-system';

import {
    ComponentElementStylePropsType,
    ComponentStylePropsType,
} from '../type';

/** 👉 PROPS TYPE */
type BackdropEffectivePropsType = Partial<{
    disableEffects: boolean;
    display: boolean;
    effectToggle: boolean;
}> &
    HTMLAttributes<HTMLDivElement> &
    SizePropsType;

export type BackdropPropsType = BackdropEffectivePropsType &
    ComponentStylePropsType;

export type BackdropRootPropsType = BackdropEffectivePropsType &
    ComponentElementStylePropsType;
