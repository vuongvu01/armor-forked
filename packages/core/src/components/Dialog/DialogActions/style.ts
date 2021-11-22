import styled from 'styled-components';
import { paddingProps, propsBlocker } from '@deliveryhero/armor-system';

import { DialogActionsRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
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
    ${paddingProps};
`;
