import styled, { css } from 'styled-components';
import { ThemeType } from '../../styling';
import { StylesFunctionDialogType } from './type';
import { Button } from '../Button';
import { spanOuterAttributes } from '../../system/attributes';

export const DialogRoot = styled.div<{
    theme: ThemeType;
    styles: StylesFunctionDialogType;
}>`
    position: relative;
    border: 1px solid gray;
    max-width: 50vw;
    ${({ theme }) => css`
        padding: ${theme.span(4)} ${theme.span(6)};
        min-width: ${theme.span(30)};
    `}
    ${spanOuterAttributes}
    ${props => props.styles(props)}
`;

export const ButtonPanel = styled.div<{
    theme: ThemeType;
    styles: StylesFunctionDialogType;
}>`
    text-align: right;
    ${props => props.styles(props)}
`;

export const CloseButton = styled.div<{
    theme: ThemeType;
    styles: StylesFunctionDialogType;
}>`
    ${props => props.styles(props)}
`;

export const ButtonYes = styled(Button)`
    margin-right: 1rem;
`;
