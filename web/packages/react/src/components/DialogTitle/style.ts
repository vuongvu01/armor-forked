import styled from 'styled-components';
import { DialogTitleRootStylePropsType } from './type';

export const DialogTitleRoot = styled.div<DialogTitleRootStylePropsType>`
    box-sizing: border-box;
    flex: 0 0;
    ${({ theme }) => theme.componentOverrides.DialogTitle.Root.base}
    ${props => props.styles(props)}
`;

// todo: probably reuse Typography component as title
export const DialogTitleText = styled.div<DialogTitleRootStylePropsType>`
    letter-spacing: 0;
    ${({ theme }) => theme.componentOverrides.DialogTitle.Text.base}
`;

export const DialogTitleDescription = styled.div<DialogTitleRootStylePropsType>`
    letter-spacing: 0;
    ${({ theme }) => theme.componentOverrides.DialogTitle.Description.base}
`;
