import styled from 'styled-components';
import { ArrowDownIcon } from '@deliveryhero/armor-icons';
import {
    TableControllerCellRootPropsType,
    TableControllerCellContainerPropsType,
    TableControllerCellIconPropsType,
} from './type';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { TableCell } from '../TableCell';
import {
    color,
    spacing,
    paddingAttributes,
    propsBlocker,
} from '../../../system';
import { transition } from '../../../system/mixins/transition';
import { expansion } from '../../../system/mixins/expansion';
import { getPropsBlocker } from '../../../utils';
import { IconButton } from '../../IconButton';

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
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

export const TableControllerCellIcon = styled(ArrowDownIcon).withConfig(
    getPropsBlocker({ expanded: true }, false),
)<TableControllerCellIconPropsType>`
    ${transition({ transform: true, color: true })};
    ${expansion(180)};
`;
