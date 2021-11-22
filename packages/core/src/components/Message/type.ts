import { ComponentType, HTMLAttributes, ReactChild, ReactNode } from 'react';
import { MarginPropsType } from '@deliveryhero/armor-system';

import {
    ComponentStylePropsType,
    ComponentElementStylePropsType,
} from '../type';

export type MessageLevelType = 'error' | 'warning' | 'info' | 'success';

/** 👉 PROPS TYPE */
type MessageEffectivePropsType = Partial<{
    onClose: () => void;
    disableCloseButton: boolean;
    disableIcon: boolean;
    actions: ReactNode;
    extra: ReactNode;
    /**
     * @armor-docs-expand MessageLevelType
     */
    level: MessageLevelType;
    error: boolean;
    warning: boolean;
    info: boolean;
    success: boolean;
    iconTag: ComponentType<unknown>;
    /**
     * @ignore
     */
    icon: ReactChild; // todo: future-reserved, to be able to pass the icon instance, not just a tag
    // add other custom properties here
}> &
    HTMLAttributes<HTMLDivElement> & // includes all HTML Div properties
    MarginPropsType;

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

/* Message Central node prop type */
export type MessageCentralPropsType = ComponentElementStylePropsType;

export type MessageEffectivePropsLevelType = Pick<
    MessageEffectivePropsType,
    'level' | 'error' | 'warning' | 'info' | 'success'
>;

export type MessageEffectivePropsLevelAndThemeType = MessageEffectivePropsLevelType &
    Pick<MessageRootPropsType, 'theme'>;
