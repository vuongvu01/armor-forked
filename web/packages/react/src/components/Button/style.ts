import styled, { css } from 'styled-components';
import { ReactElement, ReactNode } from 'react';
import { ButtonRootPropsType } from './type';
import { marginAttributes, sizeAttributes } from '../../system/attributes';
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

const visualStyle = ({
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

const sizeStyle = ({ theme, small }: ButtonRootPropsType) => {
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

const basicStyle = ({ theme }: ButtonRootPropsType) => css<ButtonRootPropsType>`
    transition: background-color ${durationRegular}ms ease,
        border-color ${durationRegular}ms ease, color ${durationRegular}ms ease;
    ${theme.componentOverrides.Button.Root.base}
`;

export const ButtonWrapper = styled(Wrapper).withConfig({
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

    ${basicStyle}
    ${visualStyle}
    ${sizeStyle}
    ${marginAttributes}
    ${sizeAttributes}
    ${(props: ButtonRootPropsType) => props.styles(props)}
`;
