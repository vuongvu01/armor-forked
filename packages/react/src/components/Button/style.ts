import styled, { css } from 'styled-components';
import { ReactElement } from 'react';

import { ButtonRootPropsType } from './type';
import {
    marginAttributes,
    paddingAttributes,
    widthAttributes,
} from '../../system/attributes';
import { durationRegular } from '../../tokens';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';

const propertyList = {
    tag: true,
    primary: true,
    secondary: true,
    tertiary: true,
    danger: true,
    small: true,
    wide: true,

    // add other custom properties here
} as ObjectLiteralType;

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

export const ButtonStyle = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<ButtonRootPropsType>`
    align-items: center;
    appearance: none;
    border: 1px solid transparent;
    box-sizing: border-box;
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
    ${marginAttributes}
    ${paddingAttributes}
    ${widthAttributes}
`;
