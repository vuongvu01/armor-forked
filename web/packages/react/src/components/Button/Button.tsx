import React, { FunctionComponent } from 'react';
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
