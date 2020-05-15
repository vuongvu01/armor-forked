import styled from 'styled-components';
import { DialogContentRootPropsType } from './type';

export const DialogContentRoot = styled.div<DialogContentRootPropsType>`
    overflow-y: auto;
    ${({ theme }) => theme.componentOverrides.DialogContent.Root.base}
    ${props => props.styles(props)}
`;
