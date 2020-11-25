import { HTMLAttributes, ReactNode } from 'react';

import { MarginAttributesType } from '../../system';
import { Indexed } from '../../type';
import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

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
    ComponentStylePropsType;

/* Message Root node prop type */
export type MessageRootPropsType = MessageEffectivePropsType &
    ComponentElementStylePropsType;

/* Message Content node prop type */
export type MessageContentPropsType = ComponentElementStylePropsType;

/* Message Actions node prop type */
export type MessageActionsPropsType = ComponentElementStylePropsType;

/* Message Extra node prop type */
export type MessageExtraPropsType = ComponentElementStylePropsType;

/* Message Icon node prop type */
export type MessageIconPropsType = MessageEffectivePropsLevelType &
    ComponentElementStylePropsType;

/* Message CloseButton node prop type */
export type MessageCloseButtonPropsType = ComponentElementStylePropsType;

/* Message Central node prop type */
export type MessageCentralPropsType = MessageEffectivePropsLevelType &
    ComponentElementStylePropsType;

export type MessageEffectivePropsLevelType = Pick<
    MessageEffectivePropsType,
    'level' | 'error' | 'warning' | 'info' | 'success'
>;

export type MessageEffectivePropsLevelAndThemeType = MessageEffectivePropsLevelType &
    Pick<MessageRootPropsType, 'theme'>;
