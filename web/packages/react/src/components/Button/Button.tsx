import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { useObject } from '../../utils/hooks';
import { useTheme } from '../../styling';

import { useClassNameButton, useStylesOverrideButton } from './utils';
import { ButtonWrapper } from './style';
import { ButtonPropsType } from './type';

const classPrefix = 'Button';

export const Button: FunctionComponent<ButtonPropsType> = ({
    className,
    classNames,
    styles,
    attributes,
    tag: Tag = 'button',
    small,
    wide,
    disabled,
    primary,
    secondary,
    tertiary,
    children,
    ...restProps
}) => {
    const theme = useTheme();
    const classNameRoot = useClassNameButton(
        classPrefix,
        className,
        classNames,
        disabled,
        small,
        wide,
        primary,
        secondary,
        tertiary,
    );
    const stylesSafe = useStylesOverrideButton(styles);
    const attributesSafe = useObject(attributes);

    return (
        <ButtonWrapper
            disabled={disabled}
            small={small}
            wide={wide}
            primary={primary}
            secondary={secondary}
            tertiary={tertiary}
            theme={theme}
            {...restProps}
            {...attributesSafe.root}
            className={classNameRoot}
            styles={stylesSafe.root}
        >
            {(classNameFinal: string) => (
                <Tag
                    {...restProps}
                    {...attributesSafe.root}
                    disabled={disabled}
                    className={classNameFinal}
                >
                    {children}
                </Tag>
            )}
        </ButtonWrapper>
    );
};

Button.defaultProps = {
    primary: true,
    secondary: false,
    tertiary: false,
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
