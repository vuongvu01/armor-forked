import React, { FunctionComponent } from 'react';
import { useObject } from '../../utils/hooks';
import { useTheme } from '../../styling';
import { useClassNameButton, useStylesOverrideButton } from './utils';

import { useAppearanceButton } from './style';
import { ButtonPropsType } from './type';

const classPrefix = 'Button';

export const Button: FunctionComponent<ButtonPropsType> = ({
    className,
    classNames,
    styles,
    attributes,
    tag,
    small,
    wide,
    disabled,
    primary,
    secondary,
    tertiary,
    ghost,
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
        ghost,
    );
    const stylesSafe = useStylesOverrideButton(styles);
    const attributesSafe = useObject(attributes);
    const ButtonRoot = useAppearanceButton(tag);

    return (
        <ButtonRoot
            disabled={disabled}
            small={small}
            wide={wide}
            primary={primary}
            secondary={secondary}
            tertiary={tertiary}
            ghost={ghost}
            theme={theme}
            {...restProps}
            {...attributesSafe.root}
            className={classNameRoot}
            styles={stylesSafe.root}
        />
    );
};
