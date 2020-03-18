import styled, { css } from 'styled-components';
import { ThemeType } from '../../themes';
import { StylesFunctionButtonType } from './type';
import { spacingOuterAttributes } from '../../system/attributes';

export const ButtonRoot = styled.button<{
    theme: ThemeType;
    styles: StylesFunctionButtonType;
    primary?: boolean;
    secondary?: boolean;
    link?: boolean;
}>`
    ${({ theme }) => css`
        background-color: ${theme.palette.primary};
        color: ${theme.palette.contrastText};
        border-radius: ${theme.shape.borderRadius};
        padding: ${theme.spacing(1)} ${theme.spacing(2)};
    `}
    border: 0 none;
    outline: none;
    ${spacingOuterAttributes}
    ${props => props.styles(props)}
`;
