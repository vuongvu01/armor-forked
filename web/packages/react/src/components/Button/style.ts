import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import { ButtonRootStylePropsType } from './type';
import { marginAttributes, sizeAttributes } from '../../system/attributes';
import { durationRegular } from '../../tokens';

const visualStyle = ({
    theme,
    secondary,
    tertiary,
}: ButtonRootStylePropsType) => {
    const {
        overrides: { Button },
    } = theme;

    if (secondary) {
        return Button.Root.secondary;
    }

    if (tertiary) {
        return Button.Root.tertiary;
    }

    // primary by default
    return Button.Root.primary;
};

const sizeStyle = ({ theme, small }: ButtonRootStylePropsType) => {
    const {
        overrides: { Button },
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

const basicStyle = ({ theme }: ButtonRootStylePropsType) => css<
    ButtonRootStylePropsType
>`
    transition: background-color ${durationRegular}ms ease,
        border-color ${durationRegular}ms ease, color ${durationRegular}ms ease;
    ${theme.overrides.Button.Root.base}
`;

export const ButtonWrapper = styled(Wrapper)<ButtonRootStylePropsType>`
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

    ${visualStyle}
    ${basicStyle}
    ${sizeStyle}
    ${marginAttributes}
    ${sizeAttributes}
    ${props => props.styles(props)}
`;
