import { ButtonHTMLAttributes } from 'react';
import {
    MarginPropsType,
    ComponentBehaviourLinkType,
    ComponentBehaviourCustomTagType,
} from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type TextInputActionEffectivePropsType =
    ButtonHTMLAttributes<HTMLButtonElement> &
        ComponentBehaviourCustomTagType &
        ComponentBehaviourLinkType &
        MarginPropsType;

export type TextInputActionPropsType = TextInputActionEffectivePropsType &
    ComponentStylePropsType;

export type TextInputActionRootPropsType = TextInputActionEffectivePropsType &
    ComponentElementStylePropsType;
