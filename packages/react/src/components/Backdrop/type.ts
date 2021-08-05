import { HTMLAttributes } from 'react';

import { SizeAttributesType } from '../../system';
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
    SizeAttributesType;

export type BackdropPropsType = BackdropEffectivePropsType &
    ComponentStylePropsType;

export type BackdropRootPropsType = BackdropEffectivePropsType &
    ComponentElementStylePropsType;
