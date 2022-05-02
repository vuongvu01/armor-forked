import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useMessageClassNames } from './utils/useMessageClassNames';
import {
    MessageRoot,
    MessageIcon,
    MessageCentral,
    MessageContent,
    MessageActions,
    MessageExtra,
} from './style';
import { MessageIconPropsType, MessagePropsType } from './type';
import { MESSAGE_CLASS_PREFIX } from './constants';
import { useMessage } from './hooks/useMessage';
import { CloseButton } from '../CloseButton';

/**
 * # Message
 *
 * They are used to give feedback to the user before or after taking an action
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/86d5d5-message/b/09d7b1)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { Message } from '@deliveryhero/armor';
 *
 * <Message>You have 99 new cookies!</Message>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Message = forwardRef<HTMLDivElement, MessagePropsType>(
    function Message({ className, children, ...props }, ref) {
        const classNameComponents = useMessageClassNames(
            MESSAGE_CLASS_PREFIX,
            className,
        );

        const {
            rootProps,
            getIconProps,
            IconTag,
            showIcon,
            showActions,
            actions,
            showExtra,
            extra,
            showCloseButton,
            getCloseButtonProps,
        } = useMessage(props, ref);

        return (
            <MessageRoot {...rootProps} className={classNameComponents.Root}>
                {showIcon && (
                    <MessageIcon
                        className={classNameComponents.Icon}
                        {...getIconProps()}
                    >
                        {(forwardedProps: MessageIconPropsType) => (
                            <IconTag {...forwardedProps}>{children}</IconTag>
                        )}
                    </MessageIcon>
                )}
                <MessageCentral className={classNameComponents.Central}>
                    <MessageContent className={classNameComponents.Content}>
                        {children}
                    </MessageContent>
                    {showActions && (
                        <MessageActions className={classNameComponents.Actions}>
                            {actions}
                        </MessageActions>
                    )}
                    {showExtra && (
                        <MessageExtra className={classNameComponents.Extra}>
                            {extra}
                        </MessageExtra>
                    )}
                </MessageCentral>
                {showCloseButton && (
                    <CloseButton
                        {...getCloseButtonProps()}
                        marginTop={3}
                        marginLeft={2}
                        className={classNameComponents.CloseButton}
                        data-testid={classNameComponents.CloseButton}
                    />
                )}
            </MessageRoot>
        );
    },
);

Message.defaultProps = {
    disableCloseButton: false,
    disableIcon: false,
    error: false,
    warning: false,
    info: false,
    success: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
Message.propTypes = {
    /** Disable close button */
    disableCloseButton: PropTypes.bool,
    /** Disable icon */
    disableIcon: PropTypes.bool,
    /** Actions to be shown on the right side */
    actions: PropTypes.element,
    /** Extra data to be shown on the right side */
    extra: PropTypes.element,
    /** Message level */
    level: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    /** Message level: error */
    error: PropTypes.bool,
    /** Message level: warning */
    warning: PropTypes.bool,
    /** Message level: info */
    info: PropTypes.bool,
    /** Message level: success */
    success: PropTypes.bool,
    /** A callback that is called when a user tries to close the message */
    onClose: PropTypes.func,
};

export const MemoizedMessage = memo(Message);
