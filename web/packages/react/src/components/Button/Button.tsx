import React, { FunctionComponent } from 'react';
import { useObject } from '../../utils/hooks';
import { useTheme } from '../../themes';
import { useClassNameButton, useStylesOverrideButton } from './utils';

import {
    useAppearanceButton,
    CentralContainer,
    IconRightContainer,
} from './style';
import { PropsButtonType } from './type';

const classPrefix = 'Button';

export const Button: FunctionComponent<PropsButtonType> = ({
    className,
    classNames,
    styles,
    attributes,
    tag,
    iconRight: IconRight,
    small,
    wide,
    disabled,
    children,
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

    const hasRightIcon = !!IconRight;

    return (
        <ButtonRoot
            disabled={disabled}
            small={small}
            wide={wide}
            primary={primary}
            secondary={secondary}
            tertiary={tertiary}
            ghost={ghost}
            {...restProps}
            {...attributesSafe.root}
            theme={theme}
            className={classNameRoot}
            styles={stylesSafe.root}
        >
            <CentralContainer
                theme={theme}
                small={small}
                hasRightIcon={hasRightIcon}
            >
                {children}
            </CentralContainer>
            {!!IconRight && (
                <IconRightContainer theme={theme}>
                    <IconRight />
                </IconRightContainer>
            )}
        </ButtonRoot>
    );
};
