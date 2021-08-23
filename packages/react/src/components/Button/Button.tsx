import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '../../utils/hooks';

import { useButtonClassName } from './hooks/useButtonClassName';
import { ButtonRoot } from './style';
import { ButtonPropsType } from './type';
import { buttonDefaultTheme } from './theme';
import { BUTTON_CLASS_PREFIX } from './constants';
import { useButton } from './hooks/useButton';

/**
 * @armor-docs-component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(
    function Button({ className, children, ...props }, ref) {
        const theme = useComponentTheme(
            BUTTON_CLASS_PREFIX,
            buttonDefaultTheme,
        );

        const { rootProps, tagProps, classNameProps, Tag } = useButton(
            props,
            ref,
        );

        const classNameRoot = useButtonClassName(
            BUTTON_CLASS_PREFIX,
            className,
            ...classNameProps,
        );

        return (
            <ButtonRoot {...rootProps} theme={theme} className={classNameRoot}>
                {(forwardedProps: ButtonPropsType) => (
                    <Tag {...forwardedProps} {...tagProps}>
                        {children}
                    </Tag>
                )}
            </ButtonRoot>
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
