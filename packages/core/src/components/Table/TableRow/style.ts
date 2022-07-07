import styled, { css } from 'styled-components';
import {
    color,
    heightProps,
    propsBlocker,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import { TableRowRootPropsType } from './type';

const getRootDynamicStyle = ({
    isHeader,
    enableRowClick,
}: TableRowRootPropsType) => {
    let result = {};

    if (!isHeader) {
        result = css`
            ${result};

            &:hover td {
                background-color: ${color('primary.01')};
            }
        `;
    }

    if (enableRowClick) {
        result = css`
            ${result};
            cursor: pointer;

            &:active td {
                background-color: ${color('primary.02')};
            }
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const TableRowRoot = styled.tr.withConfig(
    propsBlocker,
)<TableRowRootPropsType>`
    &:not(:last-child) {
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    border-color: ${color('neutral.03')};
    background-color: ${color('neutral.00')};

    ${getRootDynamicStyle};
    ${getComponentOverride('TableRow')};
    ${heightProps};
`;
