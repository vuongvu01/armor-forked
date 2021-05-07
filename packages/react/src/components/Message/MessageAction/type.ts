import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
} from 'react';

import { MarginAttributesType } from '../../../system';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../../type';

type MessageActionTagType = string | ComponentType<any>;

type MessageActionEffectivePropsType = Partial<{
    tag?: MessageActionTagType;
    // add other custom properties here
}> &
    ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button attributes
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> & // and 3 attributes from HTML Anchor
    MarginAttributesType;

/* MessageAction component prop type */
export type MessageActionPropsType = MessageActionEffectivePropsType &
    ComponentStylePropsType;

/* MessageAction Root node prop type */
export type MessageActionRootPropsType = MessageActionEffectivePropsType &
    ComponentElementStylePropsType;
