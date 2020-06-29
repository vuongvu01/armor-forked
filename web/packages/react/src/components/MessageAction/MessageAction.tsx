import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from 'src/utils/hooks';
import { useTheme } from 'src/styling';

import {
    useMessageActionClassNames,
    useMessageActionStylesOverride,
} from './utils';
import { MessageActionRoot } from './style';
import { MessageActionPropsType } from './type';
import { messageActionDefaultTheme } from './theme';

const CLASS_PREFIX = 'MessageAction';

export const MessageAction: FunctionComponent<MessageActionPropsType> = ({
    className,
    classNames,
    styles,
    tag: Tag = 'div',
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
        <MessageActionRoot
            theme={theme}
            {...restProps}
            className={classNameComponents.Root}
            styles={stylesOverride.Root}
        >
            {(classNameFinal: string) => (
                <Tag {...restProps} className={classNameFinal}>
                    {children}
                </Tag>
            )}
        </MessageActionRoot>
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
