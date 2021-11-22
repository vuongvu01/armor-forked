import styled from 'styled-components';
import {
    marginProps,
    paddingProps,
    propsBlocker,
    sizeProps,
    spacing,
} from '@deliveryhero/armor-system';
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

    ${sizeProps}
    ${paddingProps}
    ${marginProps}
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
