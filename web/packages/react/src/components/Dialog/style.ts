import styled, { css } from 'styled-components';
import { Theme } from '../../themes';
import { StylesFunctionDialog } from './type';
import { Button } from '../Button';

export const DialogRoot = styled.div<{
    theme: Theme;
    styles: StylesFunctionDialog;
}>`
    position: relative;
    border: 1px solid gray;
    max-width: 50vw;
    ${({ theme }) => css`
        padding: ${theme.spacing(4)} ${theme.spacing(6)};
        min-width: ${theme.spacing(30)};
    `}
    ${props => props.styles(props)}
`;

export const ButtonPanel = styled.div<{
    theme: Theme;
    styles: StylesFunctionDialog;
}>`
    text-align: right;
    ${props => props.styles(props)}
`;

export const CloseButton = styled.div<{
    theme: Theme;
    styles: StylesFunctionDialog;
}>`
    ${props => props.styles(props)}
`;

export const ButtonYes = styled(Button)`
    margin-right: 1rem;
`;
