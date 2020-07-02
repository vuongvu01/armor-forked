import styled, { css } from 'styled-components';
import { ReactElement } from 'react';

import { marginAttributes, widthAttributes } from '../../system/attributes';
import { durationRegular } from '../../tokens';
import { shouldForwardProp } from '../../utils';
import { ObjectLiteralType } from '../../type';
import { ButtonRootPropsType } from './type';

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
    theme,
    secondary,
    tertiary,
    danger,
}: ButtonRootPropsType) => {
    const {
        componentOverrides: { Button },
    } = theme;

    if (secondary) {
        return Button.Root.secondary;
    }

    if (tertiary) {
        return Button.Root.tertiary;
    }

    if (danger) {
        return Button.Root.danger;
    }

    // primary by default
    return Button.Root.primary;
};

const getRootDynamicSizeStyle = ({ theme, small }: ButtonRootPropsType) => {
    const {
        componentOverrides: { Button },
    } = theme;

    if (small) {
        return Button.Root.small;
    }

    return '';
};

const Wrapper = ({
    children,
    ...restProps
}: ButtonRootPropsType & {
    children: (props: ButtonRootPropsType) => ReactElement;
}) => children({ ...restProps });

export const ButtonClassNameProvider = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<ButtonRootPropsType>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    vertical-align: middle;
    outline: none;
    user-select: none;
    appearance: none;
    text-decoration: none;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    letter-spacing: 0;

    &:hover, &:focus, &:disabled, &:active, &:visited {
        text-decoration: none;
        outline: none;
    }
    &:not(:disabled) {
        cursor: pointer;
    }

    ${getRootBasicStyle}
    ${getRootDynamicVisualStyle}
    ${getRootDynamicSizeStyle}
    ${marginAttributes}
    ${widthAttributes}
    ${(props: ButtonRootPropsType) => props.styles(props)}
`;
