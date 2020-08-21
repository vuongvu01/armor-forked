import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';

import {
    useMessageActionClassNames,
    useMessageActionStylesOverride,
} from './utils';
import { MessageActionStyle } from './style';
import { MessageActionPropsType } from './type';
import { messageActionDefaultTheme } from './theme';

const CLASS_PREFIX = 'MessageAction';

export const MessageAction: FunctionComponent<MessageActionPropsType> = ({
    className,
    classNames,
    styles,
    tag: MessageActionRoot = 'div',
    useMessageColor,
    children,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, messageActionDefaultTheme);

    const classNameComponents = useMessageActionClassNames(
        CLASS_PREFIX,
        className,
        classNames,
        useMessageColor,
    );
    const stylesOverride = useMessageActionStylesOverride(styles);

    return (
        <MessageActionStyle
            theme={theme}
            {...restProps}
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
