import styled from 'styled-components';
import { DialogActionsRootPropsType } from './type';
import { paddingAttributes, propsBlocker } from '../../../system';

export const DialogActionsRoot = styled.div.withConfig(propsBlocker)<
    DialogActionsRootPropsType
>`
    flex: 0 0;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    flex-shrink: 0;
    ${({ theme }: DialogActionsRootPropsType) =>
        theme.componentOverrides.DialogActions.Root.base}
    ${paddingAttributes};
`;
