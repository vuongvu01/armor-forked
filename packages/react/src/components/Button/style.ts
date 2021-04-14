import styled, { css } from 'styled-components';
import { ReactElement } from 'react';

import { ButtonRootPropsType } from './type';
import { durationRegular } from '../../tokens';
import {
    reset,
    propsBlocker,
    getComponentOverride,
    marginAttributes,
    paddingAttributes,
    widthAttributes,
} from '../../system';

const getRootBasicStyle = ({ theme }: ButtonRootPropsType) => css<
    ButtonRootPropsType
>`
    transition: background-color ${durationRegular}ms ease,
        border-color ${durationRegular}ms ease, color ${durationRegular}ms ease;
    ${theme.componentOverrides.Button.Root.base}
`;

const getRootDynamicVisualStyle = ({
    theme: {
        componentOverrides: { Button },
    },
    secondary,
    tertiary,
}: ButtonRootPropsType) => {
    if (secondary) {
        return Button.Root.secondary;
    }

    if (tertiary) {
        return Button.Root.tertiary;
    }

    return Button.Root.primary;
};

const getRootDynamicVisualDangerStyle = ({
    theme: {
        componentOverrides: { Button },
    },
    secondary,
    tertiary,
    danger,
}: ButtonRootPropsType) => {
    if (!danger) {
        return '';
    }

    if (secondary) {
        return Button.Root.secondary__danger;
    }

    if (tertiary) {
        return Button.Root.tertiary__danger;
    }

    // primary by default
    return Button.Root.primary__danger;
};

const getRootDynamicSizeStyle = ({
    theme: {
        componentOverrides: { Button },
    },
    small,
}: ButtonRootPropsType) => (small ? Button.Root.small : '');

const Wrapper = ({
    children,
    ...restProps
}: ButtonRootPropsType & {
    children: (props: ButtonRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const ButtonRoot = styled(Wrapper).withConfig(propsBlocker)<
    ButtonRootPropsType
>`
    ${reset()};
    align-items: center;
    appearance: none;
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    outline: none;
    padding: 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0;
    user-select: none;
    vertical-align: middle;

    &:hover, &:focus, &:disabled, &:active, &:visited {
        text-decoration: none;
        outline: none;
    }
    
    &:disabled {
        cursor: not-allowed;
    }

    ${getRootBasicStyle}
    ${getRootDynamicVisualStyle}
    ${getRootDynamicSizeStyle}
    ${getRootDynamicVisualDangerStyle}
    ${getComponentOverride('Button')};
    ${marginAttributes};
    ${paddingAttributes};
    ${widthAttributes};
`;
