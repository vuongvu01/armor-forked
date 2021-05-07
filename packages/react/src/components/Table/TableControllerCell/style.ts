import styled from 'styled-components';
import { ArrowDownIcon } from '@deliveryhero/armor-icons';
import {
    TableControllerCellRootPropsType,
    TableControllerCellContainerPropsType,
    TableControllerCellIconPropsType,
} from './type';
import { TableCell } from '../TableCell';
import {
    color,
    spacing,
    paddingAttributes,
    propsBlocker,
    transition,
    expansion,
    getComponentOverride,
} from '../../../system';
import { IconButton } from '../../IconButton';

/** 👉 ROOT ELEMENT */
export const TableControllerCellRoot = styled(TableCell)<
    TableControllerCellRootPropsType
>`
    box-sizing: border-box;
    padding-top: ${spacing(4)};
    padding-bottom: ${spacing(4)};
    padding-left: ${spacing(2.5)};

    ${getComponentOverride('TableControllerCell')};
    ${paddingAttributes};
`;

export const TableControllerCellContainer = styled.div.withConfig(propsBlocker)<
    TableControllerCellContainerPropsType
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const TableControllerCellTrigger = styled(IconButton)`
    color: ${color('primary.main')};
    &:hover {
        background-color: ${color('primary.lighter')};
        color: ${color('neutral.00')};
    }
`;

export const TableControllerCellIcon = styled(ArrowDownIcon)<
    TableControllerCellIconPropsType
>`
    ${transition({ transform: true, color: true })};
    ${expansion(180)};
`;
