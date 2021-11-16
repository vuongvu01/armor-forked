import styled, { css } from 'styled-components';
import {
    color,
    spacing,
    propsBlocker,
    getComponentOverride,
    componentSpacing04,
    componentSpacing05,
    RESIZE_OBSERVER_SUPPORTED,
    durationNormal,
} from '@deliveryhero/armor-system';

import {
    TableExpandableSectionCellPropsType,
    TableExpandableSectionContentPropsType,
    TableExpandableSectionRootPropsType,
} from './type';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';

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

/** 👉 ROOT ELEMENT */
export const TableExpandableSectionRoot = styled(TableRow)<
    TableExpandableSectionRootPropsType
>`
    white-space: normal;
    background-color: ${color('neutral.00')};
    &:hover td {
        background-color: ${color('neutral.00')};
    }

    ${getRootDynamicStyle};
    ${getComponentOverride('TableExpandableSection')};
`;

const getCellStyle = ({ height }: TableExpandableSectionCellPropsType) => {
    let result = {};

    if (height && height >= 0 && RESIZE_OBSERVER_SUPPORTED) {
        result = css`
            ${result};
            height: ${height}px;
        `;
    }

    return result;
};

export const TableExpandableSectionCell = styled(TableCell)<
    TableExpandableSectionCellPropsType
>`
    position: relative;
    padding: 0;
    ${getCellStyle};
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

export const TableExpandableSectionContent = styled.div.withConfig(
    propsBlocker,
)<TableExpandableSectionContentPropsType>`
    opacity: 0;
    transition: opacity ${durationNormal}ms ease-in;

    ${getContentDynamicStyle};
`;
