import styled from 'styled-components';
import {
    marginAttributes,
    paddingAttributes,
    propsBlocker,
    sizeAttributes,
    spacing,
} from '../../system';
import {
    DataTableFooterPropsType,
    DataTableRootPropsType,
    DataTableVirtualOffsetType,
} from './type';

/** 👉 ROOT ELEMENT */
export const DataTableRoot = styled.div.withConfig(propsBlocker)<
    DataTableRootPropsType
>`
    box-sizing: border-box;

    ${sizeAttributes}
    ${paddingAttributes}
    ${marginAttributes}
`;

export const DataTableFooter = styled.div.withConfig(propsBlocker)<
    DataTableFooterPropsType
>`
    margin-top: ${spacing(3)};
    display: flex;
    justify-content: flex-end;
`;

export const DataTableVirtualPadding = styled.tr.withConfig(propsBlocker)<
    DataTableVirtualOffsetType
>`
    margin: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
    height: ${({ height }) => height}px;
`;

export const DataTableEmptyStateContainer = styled.div.withConfig(propsBlocker)`
    width: 100%;
    display: flex;
    justify-content: center;
`;
