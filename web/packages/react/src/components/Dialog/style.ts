import styled, { css } from 'styled-components';
import { ThemeType } from '../../styling';
import { DialogStylesFunctionType } from './type';
import { Button } from '../Button';
import { marginAttributes } from '../../system/attributes';

export const DialogRoot = styled.div<{
    theme: ThemeType;
    styles: DialogStylesFunctionType;
}>`
    position: relative;
    border: 1px solid gray;
    max-width: 50vw;
    ${({ theme }) => css`
        padding: ${theme.span(4)} ${theme.span(6)};
        min-width: ${theme.span(30)};
    `}
    ${marginAttributes}
    ${props => props.styles(props)}
`;

export const ButtonPanel = styled.div<{
    theme: ThemeType;
    styles: DialogStylesFunctionType;
}>`
    text-align: right;
    ${props => props.styles(props)}
`;

export const CloseButton = styled.div<{
    theme: ThemeType;
    styles: DialogStylesFunctionType;
}>`
    ${props => props.styles(props)}
`;

export const ButtonYes = styled(Button)`
    margin-right: 1rem;
`;
