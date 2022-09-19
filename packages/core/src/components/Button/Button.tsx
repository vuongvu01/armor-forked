import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useButtonClassName } from './hooks/useButtonClassName';
import { ButtonRoot } from './style';
import { ButtonPropsType } from './type';
import { BUTTON_CLASS_PREFIX } from './constants';
import { useButton } from './hooks/useButton';

/**
 * # Button
 *
 * They are used to perform an action that triggers an event. A button will always be expressed as one of the types with an option that has a state and comes on a scale.
 *
 * [Docs](https://armor.deliveryhero.com/251886272/p/47a44c-button/b/09d7b1)
 *
 * ## Examples
 *
 * ~~~
 * import { Button } from '@deliveryhero/armor';
 *
 * <Button marginRight={2}>Primary</Button>
 * <Button secondary marginRight={2}>
 *     Secondary
 * </Button>
 * <Button tertiary marginRight={2}>
 *     Tertiary
 * </Button>
 * <Button danger>Danger</Button>
 * ~~~
 *
 * @armor-docs-component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(
    function Button({ className, ...props }, ref) {
        const { rootProps, tagProps, classNameProps, Tag, children } =
            useButton(props, ref);

        const classNameRoot = useButtonClassName(
            BUTTON_CLASS_PREFIX,
            className,
            ...classNameProps,
        );

        return (
            <ButtonRoot {...rootProps} className={classNameRoot}>
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

Button.displayName = BUTTON_CLASS_PREFIX;

export const MemoizedButton = memo(Button);
