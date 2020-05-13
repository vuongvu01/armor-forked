import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import { ButtonRootPropsType } from './type';
import { marginAttributes, sizeAttributes } from '../../system/attributes';
import { durationRegular } from '../../tokens';

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
    className,
    children,
}: {
    className: string;
    children: (className: string) => ReactElement;
}) => children(className);

const basicStyle = ({ theme }: ButtonRootPropsType) => css<ButtonRootPropsType>`
    transition: background-color ${durationRegular}ms ease,
        border-color ${durationRegular}ms ease, color ${durationRegular}ms ease;
    ${theme.componentOverrides.Button.Root.base}
`;

export const ButtonWrapper = styled(Wrapper)<ButtonRootPropsType>`
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
