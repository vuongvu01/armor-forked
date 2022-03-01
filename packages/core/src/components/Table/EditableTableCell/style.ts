import styled from 'styled-components';
import { propsBlocker, token } from '@deliveryhero/armor-system';

import { EditableTableCellRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const EditableTableCellRoot = styled.div.withConfig(
    propsBlocker,
)<EditableTableCellRootPropsType>`
    box-sizing: border-box;
    position: relative;
    font-family: ${token('typography.body.fontFamily')};
`;
