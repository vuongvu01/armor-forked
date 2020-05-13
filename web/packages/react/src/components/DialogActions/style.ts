import styled from 'styled-components';
import { DialogActionsRootPropsType } from './type';

export const DialogActionsRoot = styled.div<DialogActionsRootPropsType>`
    flex: 0 0;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    flex-shrink: 0;
    ${({ theme }: DialogActionsRootPropsType) =>
        theme.componentOverrides.DialogActions.Root.base}
    ${(props: DialogActionsRootPropsType) => props.styles(props)}
`;
