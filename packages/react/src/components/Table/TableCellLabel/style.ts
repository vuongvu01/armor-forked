import styled from 'styled-components';
import { TableCellLabelRootPropsType } from './type';
import { marginAttributes } from '../../../system/attributes';
import { ObjectLiteralType } from '../../../type';
import { shouldForwardProp } from '../../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: TableCellLabelRootPropsType) =>
    theme.componentOverrides.TableCellLabel.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableCellLabelRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableCellLabelRootPropsType>`
    box-sizing: border-box;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;

    ${getRootBaseStyle}
    ${marginAttributes}
`;
