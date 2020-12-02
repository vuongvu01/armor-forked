import styled, { css } from 'styled-components';
import {
    TableExpandableSectionCellPropsType,
    TableExpandableSectionContentPropsType,
    TableExpandableSectionRootPropsType,
} from './type';
import { shouldForwardProp, makePropList } from '../../../utils';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { color, spacing } from '../../../system/mixins';
import { RESIZE_OBSERVER_SUPPORTED } from './constants';
import { transitionDurationInSec } from '../../../constants';
import { componentSpacing04, componentSpacing05 } from '../../../tokens';
import { paddingAttributes } from '../../../system/attributes';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'expanded',
    'height',
    'enableDefaultPadding',
]);

const getRootDynamicStyle = ({
    expanded,
}: TableExpandableSectionRootPropsType) => {
    let result = {};

    if (!expanded) {
        result = css`
            ${result};
            display: none;
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableExpandableSectionRoot = styled(TableRow).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableExpandableSectionRootPropsType>`
    white-space: normal;
    background-color: ${color('neutral.00')};
    &:hover td {
        background-color: ${color('neutral.00')};
    }

    ${getRootDynamicStyle};
    ${getComponentOverride('TableExpandableSection')};
`;

const getCellDynamicStyle = ({
    height,
}: TableExpandableSectionCellPropsType) => {
    let result = {};

    if (height >= 0 && RESIZE_OBSERVER_SUPPORTED) {
        result = css`
            ${result};
            height: ${height}px;
        `;
    }

    return result;
};

export const TableExpandableSectionCell = styled(TableCell).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableExpandableSectionCellPropsType>`
    position: relative;
    padding: 0;
    ${getCellDynamicStyle};
`;

const getContentDynamicStyle = ({
    expanded,
    enableDefaultPadding,
    offsetLeft,
}: TableExpandableSectionContentPropsType) => {
    let result = {};

    if (RESIZE_OBSERVER_SUPPORTED) {
        result = css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        `;
    }

    if (expanded) {
        result = css`
            ${result};
            opacity: 1;
        `;
    }

    if (enableDefaultPadding) {
        result = css`
            ${result};
            padding: ${spacing(componentSpacing05)}
                ${spacing(componentSpacing04)};
        `;
    }

    if (offsetLeft !== undefined) {
        result = css`
            ${result};
            padding-left: ${spacing(offsetLeft)};
        `;
    }

    return result;
};

export const TableExpandableSectionContent = styled.div<
    TableExpandableSectionContentPropsType
>`
    opacity: 0;
    transition: opacity ${transitionDurationInSec}s ease-in;

    ${getContentDynamicStyle};
`;
