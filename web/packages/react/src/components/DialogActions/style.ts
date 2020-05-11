import styled from 'styled-components';
import { DialogActionsRootStylePropsType } from './type';

export const DialogActionsRoot = styled.div<DialogActionsRootStylePropsType>`
    flex: 0 0;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    flex-shrink: 0;
    ${({ theme }) => theme.componentOverrides.DialogActions.Root.base}
    ${props => props.styles(props)}
`;
