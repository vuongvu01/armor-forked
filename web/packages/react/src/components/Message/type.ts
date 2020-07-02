import { HTMLAttributes, ReactNode } from 'react';
import {
    StylesFunctionOrStubType,
    StylePropsType,
    NodeStylePropsType,
    PropsWithNodeStylePropsType,
} from '../type';
import { MarginAttributesType } from '../../system/attributes';
import { Indexed } from '../../type';

export type MessageLevelType = 'error' | 'warning' | 'info' | 'success';

type MessageEffectivePropsType = Indexed<{
    onClose?: () => void;
    disableCloseButton?: boolean;
    disableIcon?: boolean;
    actions?: ReactNode;
    extra?: ReactNode;
    level?: MessageLevelType;
    error?: boolean;
    warning?: boolean;
    info?: boolean;
    success?: boolean;
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div attributes
    MarginAttributesType;

/* Message component prop type */
export type MessagePropsType = MessageEffectivePropsType &
    StylePropsType<
        {
            Root?: string;
            Content?: string;
            Icon?: string;
            CloseButton?: string;
            Central?: string;
            Actions?: string;
            Extra?: string;
            // add custom className for other nodes here
        },
        MessageStylesPropsType
    >;

export type MessageStylesPropsType = {
    Root?: StylesFunctionOrStubType<MessageEffectivePropsType>;
    Content?: StylesFunctionOrStubType;
    Icon?: StylesFunctionOrStubType;
    CloseButton?: StylesFunctionOrStubType;
    Central?: StylesFunctionOrStubType;
    Actions?: StylesFunctionOrStubType;
    Extra?: StylesFunctionOrStubType;
    // add style properties for other nodes here
};

/* Message Root node prop type */
export type MessageRootPropsType = MessageEffectivePropsType &
    NodeStylePropsType<MessageEffectivePropsType>;

/* Message Content node prop type */
export type MessageContentPropsType = NodeStylePropsType;

/* Message Actions node prop type */
export type MessageActionsPropsType = NodeStylePropsType;

/* Message Extra node prop type */
export type MessageExtraPropsType = NodeStylePropsType;

/* Message Icon node prop type */
export type MessageIconPropsType = PropsWithNodeStylePropsType<
    MessageEffectivePropsLevelType
>;

/* Message CloseButton node prop type */
export type MessageCloseButtonPropsType = NodeStylePropsType;

/* Message Central node prop type */
export type MessageCentralPropsType = PropsWithNodeStylePropsType<
    MessageEffectivePropsLevelType
>;

export type MessageEffectivePropsLevelType = Pick<
    MessageEffectivePropsType,
    'level' | 'error' | 'warning' | 'info' | 'success'
>;
export type MessageEffectivePropsLevelAndThemeType = MessageEffectivePropsLevelType &
    Pick<MessageRootPropsType, 'theme'>;
