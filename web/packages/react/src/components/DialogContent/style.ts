import styled from 'styled-components';
import { DialogContentRootStylePropsType } from './type';

export const DialogContentRoot = styled.div<DialogContentRootStylePropsType>`
    overflow-y: auto;
    ${({ theme }) => theme.componentOverrides.DialogContent.Root.base}
    ${props => props.styles(props)}
`;
