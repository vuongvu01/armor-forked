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

type MessageActionEffectivePropsType = ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button properties
    ComponentBehaviourCustomTagType &
    ComponentBehaviourLinkType &
    MarginPropsType;

/* MessageAction component prop type */
export type MessageActionPropsType = MessageActionEffectivePropsType &
    ComponentStylePropsType;

/* MessageAction Root node prop type */
export type MessageActionRootPropsType = MessageActionEffectivePropsType &
    ComponentElementStylePropsType;
