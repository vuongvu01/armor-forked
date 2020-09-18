import styled, { css } from 'styled-components';
import { TableRootPropsType } from './type';
import {
    heightAttributes,
    marginAttributes,
    widthAttributes,
} from '../../system/attributes';
import { ObjectLiteralType } from '../../type';
import { shouldForwardProp } from '../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    horizontalScroll: true,
    selectedRowIds: true,
    onRowSelectionChange: true,
} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: TableRootPropsType) =>
    theme.componentOverrides.Table.Root.base;

const getRootDynamicStyle = ({ horizontalScroll }: TableRootPropsType) => {
    let result = {};

    if (horizontalScroll) {
        result = css`
            display: block;
            overflow-x: auto;
            white-space: nowrap;
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableRoot = styled.table.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableRootPropsType>`
    box-sizing: border-box;
    border-collapse: collapse;
    table-layout: fixed;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    ${marginAttributes}
    ${widthAttributes}
    ${heightAttributes}
`;
