import styled, { css } from 'styled-components';
import { Theme } from '../../themes';
import { StylesFunctionButton } from './type';

export const ButtonRoot = styled.button<{
    theme: Theme;
    styles: StylesFunctionButton;
}>`
    ${({ theme }) => css`
        background-color: ${theme.palette.primary};
        color: ${theme.palette.contrastText};
        border-radius: ${theme.shape.borderRadius};
        padding: ${theme.spacing(1)} ${theme.spacing(2)};
    `}
    border: 0 none;
    outline: none;
    ${props => props.styles(props)}
`;
