import styled, { css, StyledComponent } from 'styled-components';
import {
    RootStylePropertiesButtonType,
    CentralStylePropertiesButtonType,
    RightIconStylePropertiesButtonType,
} from './type';
import { spanOuterAttributes, wideAttributes } from '../../system/attributes';
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
}: RootStylePropertiesButtonType) => {
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

const buttonRootStyle = (props: RootStylePropertiesButtonType) => css<
    RootStylePropertiesButtonType
>`
    display: inline-flex;
    justify-content: center;
    align-items: stretch;
    outline: none;
    user-select: none;
    text-decoration: none;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    border-radius: ${props.theme.figure.borderRadius};
    border: 1px solid transparent;
    ${props.disabled ? '' : 'cursor: pointer;'}
    font-weight: ${fontWeightMedium};
    font-family: ${props.theme.typography.fontFamily};
    font-size: ${props.theme.typography.pxToRem(fontSizeRegular)};
    text-transform: uppercase;
    letter-spacing: 0;
    ${visualStyle}
    ${spanOuterAttributes}
    ${wideAttributes}
    ${props.styles(props)}
`;

const Button = styled.button<RootStylePropertiesButtonType>`
    ${buttonRootStyle}
`;

const A = styled.a<RootStylePropertiesButtonType>`
    ${buttonRootStyle}
`;

const Span = styled.span<RootStylePropertiesButtonType>`
    ${buttonRootStyle}
`;

const Div = styled.div<RootStylePropertiesButtonType>`
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

export const CentralContainer = styled.span<CentralStylePropertiesButtonType>`
    flex-shrink: 0;
    letter-spacing: inherit;
    ${({ theme, small, hasRightIcon }) => css`
        padding: ${theme.span(small ? 1 : 3)}
            ${theme.span(hasRightIcon ? 0 : 4)} ${theme.span(small ? 1 : 3)}
            ${theme.span(4)};
    `}
`;

export const IconRightContainer = styled.span<
    RightIconStylePropertiesButtonType
>`
    flex-shrink: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 ${props => props.theme.span(4)} 0 ${props => props.theme.span(3)};
`;
