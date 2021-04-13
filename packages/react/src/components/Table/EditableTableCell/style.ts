import styled from 'styled-components';
import { EditableTableCellRootPropsType } from './type';
import { marginAttributes, propsBlocker } from '../../../system';

const getRootBaseStyle = ({ theme }: EditableTableCellRootPropsType) =>
    theme.componentOverrides.EditableTableCell.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const EditableTableCellRoot = styled.div.withConfig(propsBlocker)<
    EditableTableCellRootPropsType
>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle};
    ${marginAttributes};
`;
