import styled from 'styled-components';
import { DialogTitleRootStylePropsType } from './type';

export const DialogTitleRoot = styled.div<DialogTitleRootStylePropsType>`
    box-sizing: border-box;
    flex: 0 0;
    ${({ theme }) => theme.components.DialogTitle.Root.base}
    ${props => props.styles(props)}
`;

export const DialogTitleText = styled.div`
    letter-spacing: 0;
    ${({ theme }) => theme.components.DialogTitle.Text.base}
`;

export const DialogTitleDescription = styled.div`
    letter-spacing: 0;
    ${({ theme }) => theme.components.DialogTitle.Description.base}
`;
