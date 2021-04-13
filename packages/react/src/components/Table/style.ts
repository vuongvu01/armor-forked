import styled, { css } from 'styled-components';
import { TableRootPropsType } from './type';
import {
    heightAttributes,
    marginAttributes,
    widthAttributes,
    propsBlocker,
} from '../../system';

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
export const TableRoot = styled.table.withConfig(propsBlocker)<
    TableRootPropsType
>`
    box-sizing: border-box;
    border-collapse: collapse;

    ${getRootDynamicStyle}
    ${marginAttributes}
    ${widthAttributes}
    ${heightAttributes}
`;
