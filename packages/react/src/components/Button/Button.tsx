import React, { FunctionComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useButtonClassName } from './utils';
import { ButtonStyle } from './style';
import { ButtonPropsType } from './type';
import { buttonDefaultTheme } from './theme';
import { BUTTON_CLASS_PREFIX } from './constants';

export const Button: FunctionComponent<ButtonPropsType> = forwardRef(
    function Button(
        {
            className,
            tag: ButtonRoot = 'button',
            small,
            wide,
            disabled,
            primary,
            secondary,
            tertiary,
            danger,
            children,
            ...restProps
        },
        ref,
    ) {
        const theme = useComponentTheme(
            BUTTON_CLASS_PREFIX,
            buttonDefaultTheme,
        );

        const classNameRoot = useButtonClassName(
            BUTTON_CLASS_PREFIX,
            className,
            disabled,
            small,
            wide,
            primary,
            secondary,
            tertiary,
            danger,
        );

        // todo: forward only className here, it will be more efficient and neat
        return (
            <ButtonStyle
                {...restProps}
                disabled={disabled}
                small={small}
                wide={wide}
                primary={primary}
                secondary={secondary}
                tertiary={tertiary}
                danger={danger}
                theme={theme}
                className={classNameRoot}
            >
                {(forwardedProps: ButtonPropsType) => (
                    <ButtonRoot {...forwardedProps} ref={ref}>
                        {children}
                    </ButtonRoot>
                )}
            </ButtonStyle>
        );
    },
);

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
