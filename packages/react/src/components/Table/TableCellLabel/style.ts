import styled from 'styled-components';
import { TableCellLabelRootPropsType } from './type';
import { marginAttributes } from '../../../system/attributes';
import { ObjectLiteralType } from '../../../type';
import { getPropsBlocker } from '../../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {} as ObjectLiteralType;

const getRootDynamicStyle = ({ theme }: TableCellLabelRootPropsType) =>
    theme.componentOverrides.TableCellLabel.Root.base;

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableCellLabelRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<TableCellLabelRootPropsType>`
    box-sizing: border-box;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;

    ${getRootDynamicStyle}
    ${marginAttributes}
`;
