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
    blue100,
    grey050,
    blue300,
    blue200,
    blue050,
} from '../../tokens';
import { durationNormal } from '../../tokens/durations'; // todo: consuming tokens directly is not good

const visualStyle = ({
    theme,
    secondary,
    tertiary,
    disabled,
}: ButtonRootStylePropsType) => {
    const { palette } = theme;

    if (secondary) {
        return css`
            background-color: ${white};
            color: ${disabled ? grey050 : palette.secondary.contrastText};
            border-color: ${disabled ? grey100 : blue200};

            &:hover {
                border-color: ${disabled ? grey100 : blue300};
            }
            &:focus {
                border-color: ${disabled ? grey100 : blue300};
                background-color: ${disabled ? white : blue050};
            }
        `;
    }

    if (tertiary) {
        return css`
            text-transform: uppercase;
            padding-left: 0;
            padding-right: 0;
            color: ${disabled ? grey050 : blue200};

            &:hover {
                color: ${disabled ? grey050 : blue300};
            }
        `;
    }

    // primary by default
    return css`
        box-shadow: ${shadow100};
        background-color: ${disabled ? grey100 : palette.primary.main};
        color: ${disabled ? grey050 : palette.primary.contrastText};
        &:focus {
            background-color: ${disabled ? grey100 : blue100};
        }
        &:hover {
            background-color: ${disabled ? grey100 : palette.primary.dark};
        }
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
    letter-spacing: 0;

    ${({ theme, small, disabled }) => css<ButtonRootStylePropsType>`
        padding: ${theme.span(small ? 1 : 2)} ${theme.span(4)};
        cursor: ${disabled ? 'default' : 'pointer'};
        border-radius: ${theme.figure.borderRadius};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.pixelToRem(fontSizeRegular)};
        line-height: 1.6;
    `}

    transition: background-color ${durationNormal}ms ease, border-color ${durationNormal}ms ease;

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
