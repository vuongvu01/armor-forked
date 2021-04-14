import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useMessageActionClassNames } from './utils/useMessageActionClassNames';
import { MessageActionRoot } from './style';
import { MessageActionPropsType } from './type';
import { messageActionDefaultTheme } from './theme';
import { MESSAGE_ACTION_CLASS_PREFIX } from './constants';
import { ButtonPropsType } from '../../Button/type';

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
