import styled, { css } from 'styled-components';
import { ArrowDownIcon } from '@deliveryhero/armor-icons';
import {
    color,
    spacing,
    paddingProps,
    propsBlocker,
    transition,
    expansion,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import {
    TableControllerCellRootPropsType,
    TableControllerCellContainerPropsType,
    TableControllerCellIconPropsType,
} from './type';
import { TableCell } from '../TableCell';
import { IconButton } from '../../IconButton';

/** 👉 ROOT ELEMENT */
export const TableControllerCellRoot = styled(
    TableCell,
)<TableControllerCellRootPropsType>`
    box-sizing: border-box;
    padding-top: ${spacing(4)};
    padding-bottom: ${spacing(4)};
    padding-left: ${spacing(2.5)};

    ${getComponentOverride('TableControllerCell')};
    ${paddingProps};
`;

export const TableControllerCellContainer = styled.div.withConfig(
    propsBlocker,
)<TableControllerCellContainerPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const TableControllerCellTrigger = styled(IconButton)`
    color: ${color('primary.main')};

    &:hover {
        background-color: ${color('neutral.00')};
    }
`;

export const TableControllerCellIcon = styled(
    ArrowDownIcon,
)<TableControllerCellIconPropsType>`
    ${transition({ transform: true, color: true })};
    ${expansion(180)};
`;
