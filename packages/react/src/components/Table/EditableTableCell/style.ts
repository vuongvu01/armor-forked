import styled from 'styled-components';
import { EditableTableCellRootPropsType } from './type';
import { propsBlocker } from '../../../system';

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
