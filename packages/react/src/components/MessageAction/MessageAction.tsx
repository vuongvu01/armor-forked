import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import {
    useMessageActionClassNames,
    useMessageActionStylesOverride,
} from './utils';
import { MessageActionStyle } from './style';
import { MessageActionPropsType } from './type';
import { messageActionDefaultTheme } from './theme';
import { MESSAGE_ACTION_CLASS_PREFIX } from './constants';

export const MessageAction: FunctionComponent<MessageActionPropsType> = ({
    className,
    classNames,
    styles,
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
        classNames,
        useMessageColor,
    );
    const stylesOverride = useMessageActionStylesOverride(styles);

    return (
        <MessageActionStyle
            {...restProps}
            theme={theme}
            className={classNameComponents.Root}
            styles={stylesOverride.Root}
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
