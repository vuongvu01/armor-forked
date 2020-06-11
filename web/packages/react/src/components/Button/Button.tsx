import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useThemeOverride } from '../../utils/hooks';
import { useTheme } from '../../styling';

import { useButtonClassName, useButtonStylesOverride } from './utils';
import { ButtonWrapper } from './style';
import { ButtonPropsType } from './type';
import { buttonDefaultTheme } from './theme';

const CLASS_PREFIX = 'Button';

export const Button: FunctionComponent<ButtonPropsType> = ({
    className,
    classNames,
    styles,
    tag: Tag = 'button',
    small,
    wide,
    disabled,
    primary,
    secondary,
    tertiary,
    danger,
    children,
    ...restProps
}) => {
    const theme = useTheme();
    useThemeOverride(CLASS_PREFIX, theme, buttonDefaultTheme);

    const classNameRoot = useButtonClassName(
        CLASS_PREFIX,
        className,
        classNames,
        disabled,
        small,
        wide,
        primary,
        secondary,
        tertiary,
        danger,
    );
    const stylesOverride = useButtonStylesOverride(styles);

    return (
        <ButtonWrapper
            disabled={disabled}
            small={small}
            wide={wide}
            primary={primary}
            secondary={secondary}
            tertiary={tertiary}
            danger={danger}
            theme={theme}
            {...restProps}
            className={classNameRoot}
            styles={stylesOverride.Root}
        >
            {(forwardedProps: ButtonPropsType) => (
                <Tag {...forwardedProps}>{children}</Tag>
            )}
        </ButtonWrapper>
    );
};

Button.defaultProps = {
    primary: true,
    secondary: false,
    tertiary: false,
    danger: false,
    small: false,
    wide: false,
    tag: 'button',
    type: 'button',
    disabled: false,
};

/** Support of prop-types is here for project that don't use TypeScript */
Button.propTypes = {
    /** Renders the button as Primary (default) */
    primary: PropTypes.bool,
    /** Renders the button as Secondary */
    secondary: PropTypes.bool,
    /** Renders the button as Tertiary */
    tertiary: PropTypes.bool,
    /** Renders the button as Danger */
    danger: PropTypes.bool,
    /** Decreases button height to 32px */
    small: PropTypes.bool,
    /** Tells to occupy entire width of a parent container */
    wide: PropTypes.bool,
    /** Tag name or component */
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
    /** HTML Button type */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** HTML Anchor href */
    href: PropTypes.string,
    /** HTML Anchor target */
    target: PropTypes.string,
    /** HTML Anchor rel */
    rel: PropTypes.string,
    /** HTML Button disabled */
    disabled: PropTypes.bool,
};
