import styled, { css } from 'styled-components';
import { TableRowRootPropsType } from './type';
import { color, heightAttributes, propsBlocker } from '../../../system';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

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
export const TableRowRoot = styled.tr.withConfig(propsBlocker)<
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
