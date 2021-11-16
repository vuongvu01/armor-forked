import styled from 'styled-components';
import { propsBlocker } from '@deliveryhero/armor-system';

import { EditableTableCellRootPropsType } from './type';

const getRootBaseStyle = ({ theme }: EditableTableCellRootPropsType) =>
    theme.componentOverrides.EditableTableCell.Root.base;

/** 👉 ROOT ELEMENT */
export const EditableTableCellRoot = styled.div.withConfig(propsBlocker)<
    EditableTableCellRootPropsType
>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle};
`;
