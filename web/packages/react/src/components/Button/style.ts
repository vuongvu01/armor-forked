import styled, { css, StyledComponent } from 'styled-components';
import {
    ButtonAppearanceThemeType,
    ButtonCSSParametersThemeType,
    ButtonRootStylePropsType,
} from './type';
import { marginAttributes, wideAttributes } from '../../system/attributes';
import { durationNormal } from '../../tokens';

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
    &[disabled=""] {
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

const buttonRootStyle = (props: ButtonRootStylePropsType) => css<
    ButtonRootStylePropsType
>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    vertical-align: middle;
    outline: none;
    user-select: none;
    text-decoration: none;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    letter-spacing: 0;
    line-height: 1.6;

    ${({ theme, small, disabled }) => css<ButtonRootStylePropsType>`
        padding: ${theme.span(small ? 1 : 2)} ${theme.span(4)};
        cursor: ${disabled ? 'default' : 'pointer'};
        border-radius: ${theme.figure.borderRadius};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.pixelToRem(
            theme.components.Button.base.fontSize,
        )};
        font-weight: ${theme.components.Button.base.fontWeight || 'normal'};
        transition: background-color ${durationNormal}ms ease,
            border-color ${durationNormal}ms ease,
            color ${durationNormal}ms ease;
    `}
    ${visualStyle}
    ${marginAttributes}
    ${wideAttributes}
    ${props.styles(props)}
`;

const Button = styled.button<ButtonRootStylePropsType>`
    ${buttonRootStyle}
`;

const A = styled.a<ButtonRootStylePropsType>`
    ${buttonRootStyle}
`;

const Span = styled.span<ButtonRootStylePropsType>`
    ${buttonRootStyle}
`;

const Div = styled.div<ButtonRootStylePropsType>`
    ${buttonRootStyle}
`;

export const useAppearanceButton = (
    tagName?: string,
): StyledComponent<any, any> => {
    switch (tagName) {
        case 'a':
        case 'link':
            return A;
        case 'span':
            return Span;
        case 'div':
            return Div;
        case 'button':
        default:
            return Button;
    }
};
