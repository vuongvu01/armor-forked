import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { CancelIcon } from '@deliveryhero/armor-icons';

import { useComponentTheme } from '../../utils/hooks';

import { useMessageClassNames, useMessageStylesOverride } from './utils';
import {
    MessageRoot,
    MessageIconStyle,
    MessageCentral,
    MessageCloseButton,
    MessageContent,
    MessageActions,
    MessageExtra,
} from './style';
import { MessageIconPropsType, MessagePropsType } from './type';
import { messageDefaultTheme } from './theme';
import { useIconComponent } from './utils/useIconComponent';
import { MESSAGE_CLASS_PREFIX } from './constants';

export const Message: FunctionComponent<MessagePropsType> = ({
    className,
    classNames,
    styles,
    onClose,
    disableCloseButton,
    disableIcon,
    children,
    actions,
    extra,
    level,
    error,
    warning,
    info,
    success,
    ...restProps
}) => {
    const theme = useComponentTheme(MESSAGE_CLASS_PREFIX, messageDefaultTheme);

    const classNameComponents = useMessageClassNames(
        MESSAGE_CLASS_PREFIX,
        className,
        classNames,
    );
    const stylesOverride = useMessageStylesOverride(styles);

    const Icon = useIconComponent({
        level,
        error,
        warning,
        info,
        success,
    });

    return (
        <MessageRoot
            {...restProps}
            theme={theme}
            disableCloseButton={disableCloseButton}
            level={level}
            error={error}
            warning={warning}
            info={info}
            success={success}
            className={classNameComponents.Root}
            styles={stylesOverride.Root}
        >
            {!disableIcon && (
                <MessageIconStyle
                    theme={theme}
                    level={level}
                    error={error}
                    warning={warning}
                    info={info}
                    success={success}
                    className={classNameComponents.Icon}
                    styles={stylesOverride.Icon}
                >
                    {(forwardedProps: MessageIconPropsType) => (
                        <Icon {...forwardedProps}>{children}</Icon>
                    )}
                </MessageIconStyle>
            )}
            <MessageCentral
                theme={theme}
                className={classNameComponents.Central}
                styles={stylesOverride.Central}
            >
                <MessageContent
                    theme={theme}
                    className={classNameComponents.Content}
                    styles={stylesOverride.Content}
                >
                    {children}
                </MessageContent>
                {!!actions && (
                    <MessageActions
                        theme={theme}
                        className={classNameComponents.Actions}
                        styles={stylesOverride.Actions}
                    >
                        {actions}
                    </MessageActions>
                )}
                {!!extra && (
                    <MessageExtra
                        theme={theme}
                        className={classNameComponents.Extra}
                        styles={stylesOverride.Extra}
                    >
                        {extra}
                    </MessageExtra>
                )}
            </MessageCentral>
            {!disableCloseButton && (
                <MessageCloseButton
                    onClick={onClose}
                    theme={theme}
                    className={classNameComponents.CloseButton}
                    styles={stylesOverride.CloseButton}
                    tabIndex={-1}
                >
                    <CancelIcon />
                </MessageCloseButton>
            )}
        </MessageRoot>
    );
};

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
