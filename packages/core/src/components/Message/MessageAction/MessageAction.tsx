import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

import { useMessageActionClassNames } from './hooks/useMessageActionClassNames';
import { MessageActionRoot } from './style';
import { MessageActionPropsType } from './type';
import { MESSAGE_ACTION_CLASS_PREFIX } from './constants';
import { ButtonPropsType } from '../../Button/type';

/**
 * # MessageAction
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
export const MessageAction: FC<
    React.PropsWithChildren<MessageActionPropsType>
> = ({ className, tag: Tag = 'div', children, ...restProps }) => {
    const classNameComponents = useMessageActionClassNames(
        MESSAGE_ACTION_CLASS_PREFIX,
        className,
    );

    return (
        <MessageActionRoot
            {...restProps}
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

export const MemoizedMessageAction = memo(MessageAction);
