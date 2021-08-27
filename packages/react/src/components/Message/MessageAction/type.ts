import { ButtonHTMLAttributes } from 'react';

import { MarginAttributesType } from '../../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';
import { ComponentBehaviourLinkType } from '../../../system/types/ComponentBehaviourLinkType';
import { ComponentBehaviourCustomTagType } from '../../../system/types/ComponentBehaviourCustomTagType';

type MessageActionEffectivePropsType = ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button attributes
    ComponentBehaviourCustomTagType &
    ComponentBehaviourLinkType &
    MarginAttributesType;

/* MessageAction component prop type */
export type MessageActionPropsType = MessageActionEffectivePropsType &
    ComponentStylePropsType;

/* MessageAction Root node prop type */
export type MessageActionRootPropsType = MessageActionEffectivePropsType &
    ComponentElementStylePropsType;
