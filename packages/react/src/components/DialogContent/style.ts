import styled from 'styled-components';
import { DialogContentRootPropsType } from './type';

export const DialogContentRoot = styled.div<DialogContentRootPropsType>`
    ${({ enableVerticalScroll }) =>
        enableVerticalScroll ? 'overflow-y: auto;' : ''}
    ${({ theme }) => theme.componentOverrides.DialogContent.Root.base}
    ${props => props.styles(props)}
`;
