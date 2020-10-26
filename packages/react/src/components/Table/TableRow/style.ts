import styled, { css } from 'styled-components';
import { TableRowRootPropsType } from './type';
import { ObjectLiteralType } from '../../../type';
import { shouldForwardProp } from '../../../utils';
import { heightAttributes } from '../../../system/attributes';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    isHeader: true,
    rowId: true,
} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: TableRowRootPropsType) =>
    theme.componentOverrides.TableRow.Root.base;

const getRootDynamicStyle = ({ theme, isHeader }: TableRowRootPropsType) => {
    const {
        componentOverrides: { TableRow },
    } = theme;

    let result = {};

    if (!isHeader) {
        result = TableRow.Root.body;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableRowRoot = styled.tr.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableRowRootPropsType>`
    &:not(:last-child) {
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    ${heightAttributes}
`;
