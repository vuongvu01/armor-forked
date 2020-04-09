import styled, { css } from 'styled-components';
import { ReactElement } from 'react';
import {
    ButtonAppearanceThemeType,
    ButtonCSSParametersThemeType,
    ButtonRootStylePropsType,
} from './type';
import { marginAttributes, wideAttributes } from '../../system/attributes';
import { durationRegular } from '../../tokens';

const makeCSSBasic = (declaration?: ButtonCSSParametersThemeType) => {
    if (!declaration) {
        return '';
    }

    return `
        ${declaration.color ? `color: ${declaration.color};` : ''}
        ${
            declaration.backgroundColor
                ? `background-color: ${declaration.backgroundColor};`
                : ''
        }
        ${
            declaration.borderColor
                ? `border-color: ${declaration.borderColor};`
                : ''
        }
        ${
            declaration.textTransform
                ? `text-transform: ${declaration.textTransform};`
                : ''
        }
    `;
};

const makeCSS = (style: ButtonAppearanceThemeType) => `
    ${makeCSSBasic(style.base)}
    &:hover {
        ${makeCSSBasic(style.hover)}
    }
    &:focus {
        ${makeCSSBasic(style.focus)}
    }
    &:disabled {
        ${makeCSSBasic(style.disabled)}
    }
`;

const visualStyle = ({
    theme,
    secondary,
    tertiary,
}: ButtonRootStylePropsType) => {
    const {
        components: { Button },
    } = theme;

    if (secondary) {
        return makeCSS(Button.secondary).toString();
    }

    if (tertiary) {
        return css`
            ${makeCSS(Button.tertiary)}
            padding-left: 0;
            padding-right: 0;
        `;
    }

    // primary by default
    return makeCSS(Button.primary).toString();
};

const Wrapper = ({
    className,
    children,
}: {
    className: string;
    children: (className: string) => ReactElement;
}) => children(className);

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

    ${({ theme, small }) => css<ButtonRootStylePropsType>`
        padding: ${theme.span(small ? 1 : 2)} ${theme.span(4)};
        border-radius: ${theme.figure.borderRadius};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.pixelToRem(
            theme.components.Button.base.fontSize,
        )};
        font-weight: ${theme.components.Button.base.fontWeight || 'normal'};
        transition: background-color ${durationRegular}ms ease,
            border-color ${durationRegular}ms ease,
            color ${durationRegular}ms ease;
    `}
    ${visualStyle}
    ${marginAttributes}
    ${wideAttributes}
    ${props => props.styles(props)}
`;
