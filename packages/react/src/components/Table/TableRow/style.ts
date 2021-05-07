import styled, { css } from 'styled-components';
import { TableRowRootPropsType } from './type';
import {
    color,
    heightAttributes,
    propsBlocker,
    getComponentOverride,
} from '../../../system';

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

/** 👉 ROOT ELEMENT */
export const TableRowRoot = styled.tr.withConfig(propsBlocker)<
    TableRowRootPropsType
>`
    &:not(:last-child) {
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    border-color: ${color('neutral.03')};
    background-color: ${color('neutral.01')};

    ${getRootDynamicStyle};
    ${getComponentOverride('TableRow')};
    ${heightAttributes};
`;
