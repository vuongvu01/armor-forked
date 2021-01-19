import styled, { css } from 'styled-components';
import { TableRootPropsType } from './type';
import {
    heightAttributes,
    marginAttributes,
    widthAttributes,
} from '../../system/attributes';
import { ObjectLiteralType } from '../../type';
import { getPropsBlocker } from '../../utils';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    horizontalScroll: true,
    selectedRowIds: true,
    onRowSelectionChange: true,
    enableFixedLayout: true,
} as ObjectLiteralType;

const getRootDynamicStyle = ({
    horizontalScroll,
    enableFixedLayout,
    theme,
}: TableRootPropsType) => {
    const {
        componentOverrides: { Table },
    } = theme;

    let result = Table.Root.base;

    if (horizontalScroll) {
        result = css`
            ${result};
            display: block;
            overflow-x: auto;
            white-space: nowrap;
        `;
    }

    if (enableFixedLayout) {
        result = css`
            ${result};
            table-layout: fixed;
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableRoot = styled.table.withConfig(getPropsBlocker(propertyList))<
    TableRootPropsType
>`
    box-sizing: border-box;
    border-collapse: collapse;

    ${getRootDynamicStyle}
    ${marginAttributes}
    ${widthAttributes}
    ${heightAttributes}
`;
