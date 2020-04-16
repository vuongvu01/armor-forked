import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import { ButtonRootStylePropsType } from './type';
import { marginAttributes, wideAttributes } from '../../system/attributes';
import { durationRegular } from '../../tokens';

const visualStyle = ({
    theme,
    secondary,
    tertiary,
}: ButtonRootStylePropsType) => {
    const {
        components: { Button },
    } = theme;

    if (secondary) {
        return Button.secondary;
    }

    if (tertiary) {
        return Button.tertiary;
    }

    // primary by default
    return Button.primary;
};

const sizeStyle = ({ theme, small }: ButtonRootStylePropsType) => {
    const {
        components: { Button },
    } = theme;

    if (small) {
        return Button.small;
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
    border-radius: ${theme.figure.borderRadius};
    font-family: ${theme.typography.fontFamily};
    transition: background-color ${durationRegular}ms ease,
        border-color ${durationRegular}ms ease, color ${durationRegular}ms ease;
    ${theme.components.Button.base}
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
    line-height: 1.6;

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
    ${wideAttributes}
    ${props => props.styles(props)}
`;
