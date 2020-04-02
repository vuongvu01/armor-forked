import styled, { css, StyledComponent } from 'styled-components';
import { ButtonRootStylePropsType } from './type';
import { marginAttributes, wideAttributes } from '../../system/attributes';
import {
    grey200,
    white,
    fontWeightMedium,
    grey100,
    fontSizeRegular,
    shadow100,
} from '../../tokens'; // todo: consuming tokens directly is not good

const visualStyle = ({
    theme,
    secondary,
    tertiary,
    ghost,
    disabled,
}: ButtonRootStylePropsType) => {
    const { palette } = theme;

    if (secondary) {
        return css`
            box-shadow: ${shadow100};
            background-color: ${palette.secondary.main};
            color: ${palette.secondary.contrastText};
        `;
    }

    if (tertiary) {
        return css`
            box-shadow: ${shadow100};
            background-color: ${white};
            color: ${palette.secondary.contrastText};
            border-color: ${grey200};
        `;
    }

    if (ghost) {
        return css`
            color: ${palette.primary.main};
            background-color: transparent;
        `;
    }

    // primary by default
    return css`
        box-shadow: ${shadow100};
        background-color: ${disabled ? grey100 : palette.primary.main};
        color: ${disabled ? grey200 : palette.primary.contrastText};
        &:focus,
        &:hover {
            background-color: ${disabled ? grey100 : palette.primary.dark};
        }
        transition: background-color 200ms ease;
    `;
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
    font-weight: ${fontWeightMedium};
    text-transform: uppercase;
    letter-spacing: 0;

    ${({ theme, small, disabled }) => css<ButtonRootStylePropsType>`
        padding: ${theme.span(small ? 1 : 2)} ${theme.span(4)};
        cursor: ${disabled ? 'default' : 'pointer'};
        border-radius: ${theme.figure.borderRadius};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.pixelToRem(fontSizeRegular)};
        line-height: 1.6;
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
