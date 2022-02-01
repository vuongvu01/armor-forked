import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useMessageActionClassNames } from './hooks/useMessageActionClassNames';
import { MessageActionRoot } from './style';
import { MessageActionPropsType } from './type';
import { messageActionDefaultTheme } from './theme';
import { MESSAGE_ACTION_CLASS_PREFIX } from './constants';
import { ButtonPropsType } from '../../Button/type';

/**
 * @armor-docs-component
 */
export const MessageAction: FunctionComponent<MessageActionPropsType> = ({
    className,
    tag: Tag = 'div',
    children,
    ...restProps
}) => {
    const theme = useComponentTheme(
        MESSAGE_ACTION_CLASS_PREFIX,
        messageActionDefaultTheme,
    );

    const classNameComponents = useMessageActionClassNames(
        MESSAGE_ACTION_CLASS_PREFIX,
        className,
    );

    return (
        <MessageActionRoot
            {...restProps}
            theme={theme}
            className={classNameComponents.Root}
            tabIndex={0}
        >
            {(forwardedProps: ButtonPropsType) => (
                <Tag {...forwardedProps}>{children}</Tag>
            )}
        </MessageActionRoot>
    );
};

MessageAction.defaultProps = {
    tag: 'div',
};

/** Support of prop-types is here for project that don't use TypeScript */
MessageAction.propTypes = {
    /** Tag name or component */
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
};
