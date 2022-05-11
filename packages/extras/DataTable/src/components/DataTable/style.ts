import styled from 'styled-components';
import {
    marginProps,
    paddingProps,
    propsBlocker,
    sizeProps,
    spacing,
} from '@deliveryhero/armor-system';
import { TableCell } from '@deliveryhero/armor';
import {
    DataTableFooterPropsType,
    DataTableRootPropsType,
    DataTableVirtualOffsetType,
} from './type';

/** 👉 ROOT ELEMENT */
export const DataTableRoot = styled.div.withConfig(
    propsBlocker,
)<DataTableRootPropsType>`
    box-sizing: border-box;

    ${sizeProps}
    ${paddingProps}
    ${marginProps}
`;

export const DataTableFooter = styled.div.withConfig(
    propsBlocker,
)<DataTableFooterPropsType>`
    margin-top: ${spacing(3)};
    display: flex;
    justify-content: flex-end;
`;

export const DataTableVirtualPadding = styled.tr.withConfig(
    propsBlocker,
)<DataTableVirtualOffsetType>`
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

export const DataTableDragHandleCell = styled(TableCell)`
    width: ${spacing(2)};
    padding: 0;
`;

export const DataTableRowDragHandle = styled.span`
    position: absolute;
    left: ${spacing(1)};
    top: ${spacing(1)};
    width: ${spacing(2)};
    height: ${spacing(4)};

    cursor: grab;

    .DataTableDroppableContainer--TableBody & {
        cursor: grabbing;
    }

    .TableRow--hovered &,
    .TableRow--hovered &::before {
        background-image: radial-gradient(black 40%, transparent 40%);
        background-size: ${spacing(1)} ${spacing(1)};
        background-position: 100% 0;
        background-repeat: repeat-y;
    }

    .TableRow--hovered &::before {
        content: '';
        display: block;
        width: 33%;
        height: 100%;
    }
`;
