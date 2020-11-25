import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../../utils/hooks';

import { useMessageActionClassNames } from './utils/useMessageActionClassNames';
import { MessageActionStyle } from './style';
import { MessageActionPropsType } from './type';
import { messageActionDefaultTheme } from './theme';
import { MESSAGE_ACTION_CLASS_PREFIX } from './constants';

export const MessageAction: FunctionComponent<MessageActionPropsType> = ({
    className,
    tag: MessageActionRoot = 'div',
    useMessageColor,
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
        useMessageColor,
    );

    return (
        <MessageActionStyle
            {...restProps}
            theme={theme}
            className={classNameComponents.Root}
        >
            {(classNameFinal: string) => (
                <MessageActionRoot {...restProps} className={classNameFinal}>
                    {children}
                </MessageActionRoot>
            )}
        </MessageActionStyle>
    );
};

MessageAction.defaultProps = {
    tag: 'div',
    useMessageColor: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
MessageAction.propTypes = {
    /** Tag name or component */
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    useMessageColor: PropTypes.bool,
};
