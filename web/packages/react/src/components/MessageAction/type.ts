import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
} from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    NodeStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

type MessageActionTagType = string | ComponentType<any>;

type MessageActionEffectivePropsType = Indexed<{
    tag?: MessageActionTagType;
    useMessageColor?: boolean;
    // add other custom properties here
}> &
    ButtonHTMLAttributes<HTMLButtonElement> & // includes all HTML Button attributes
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href' | 'rel'> & // and 3 attributes from HTML Anchor
    MarginAttributesType;

/* MessageAction component prop type */
export type MessageActionPropsType = MessageActionEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            // add custom className for other nodes here
        },
        MessageActionStylesPropsType
    >;

export type MessageActionStylesPropsType = {
    Root?: StylesFunctionOrStubType<MessageActionEffectivePropsType>;
    // add style properties for other nodes here
};

/* MessageAction Root node prop type */
export type MessageActionRootPropsType = MessageActionEffectivePropsType &
    NodeStylePropsType<MessageActionEffectivePropsType>;
