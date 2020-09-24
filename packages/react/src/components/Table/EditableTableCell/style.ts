import styled from 'styled-components';
import { EditableTableCellRootPropsType } from './type';
import { marginAttributes } from '../../../system/attributes';
import { ObjectLiteralType } from '../../../type';
import { shouldForwardProp } from '../../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: EditableTableCellRootPropsType) =>
    theme.componentOverrides.EditableTableCell.Root.base;

const getRootDynamicStyle = ({ theme }: EditableTableCellRootPropsType) => {
    const {
        componentOverrides: { EditableTableCell },
    } = theme;

    return '';
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const EditableTableCellRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<EditableTableCellRootPropsType>`
    box-sizing: border-box;
    position: relative;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    ${marginAttributes}
`;
