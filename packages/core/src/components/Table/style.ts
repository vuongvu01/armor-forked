import styled, { css } from 'styled-components';
import {
    heightProps,
    marginProps,
    widthProps,
    propsBlocker,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import { TableRootPropsType } from './type';

const getDynamicStyle = ({
    horizontalScroll,
    enableFixedLayout,
}: TableRootPropsType) => {
    let result = css``;

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

/** 👉 ROOT ELEMENT */
export const TableRoot = styled.table.withConfig(
    propsBlocker,
)<TableRootPropsType>`
    box-sizing: border-box;
    border-collapse: collapse;

    ${getDynamicStyle};
    ${getComponentOverride('Table')};
    ${marginProps};
    ${widthProps};
    ${heightProps};
`;
