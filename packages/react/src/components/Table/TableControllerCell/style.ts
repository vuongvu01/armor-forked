import styled from 'styled-components';
import { ArrowDownIcon } from '@deliveryhero/armor-icons';
import {
    TableControllerCellRootPropsType,
    TableControllerCellContainerPropsType,
    TableControllerCellIconPropsType,
} from './type';
import { paddingAttributes } from '../../../system/attributes';
import { shouldForwardProp, makePropList } from '../../../utils';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { TableCell } from '../TableCell';
import { color, spacing } from '../../../system/mixins';
import { transition } from '../../../system/mixins/transition';
import { expansion } from '../../../system/mixins/expansion';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList(['expanded']);

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableControllerCellRoot = styled(TableCell).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableControllerCellRootPropsType>`
    box-sizing: border-box;
    padding-top: ${spacing(4)};
    padding-bottom: ${spacing(4)};
    padding-left: ${spacing(2.5)};

    ${getComponentOverride('TableControllerCell')};
    ${paddingAttributes};
`;

export const TableControllerCellContainer = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableControllerCellContainerPropsType>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

export const TableControllerCellIcon = styled(ArrowDownIcon).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableControllerCellIconPropsType>`
    color: ${color('primary.main')};
    ${transition({ transform: true })};
    ${expansion(180)};
`;
