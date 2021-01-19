import styled, { css } from 'styled-components';
import { TableRowRootPropsType } from './type';
import { ObjectLiteralType } from '../../../type';
import { getPropsBlocker } from '../../../utils';
import { heightAttributes } from '../../../system/attributes';
import { color } from '../../../system/mixins';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    isHeader: true,
    isFooter: true,
    rowId: true,
} as ObjectLiteralType;

const getRootDynamicStyle = ({ isHeader }: TableRowRootPropsType) => {
    let result = {};

    if (!isHeader) {
        result = css`
            ${result};
            &:hover td {
                background-color: ${color('primary.lightest')};
            }
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableRowRoot = styled.tr.withConfig(getPropsBlocker(propertyList))<
    TableRowRootPropsType
>`
    &:not(:last-child) {
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    border-color: ${color('neutral.03')};
    background-color: ${color('neutral.01')};

    ${getRootDynamicStyle}
    ${getComponentOverride('TableRow')};
    ${heightAttributes}
`;
