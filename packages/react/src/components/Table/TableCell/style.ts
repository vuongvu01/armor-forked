import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import {
    TableCellContentAlignmentAttributesType,
    TableCellRootPropsType,
} from './type';
import { makePropList, shouldForwardProp } from '../../../utils';
import {
    colorAttributes,
    heightAttributes,
    paddingAttributes,
    widthAttributes,
} from '../../../system/attributes';
import { zIndexTableHeader } from '../../../tokens';
import { LEFT, RIGHT, transitionDurationInSec } from '../../../constants';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList([
    'isHeader',
    'contentAlignX',
    'contentAlignY',
    'disabled',
    'ellipsis',
    'stickyTop',
    'stickyAlignment',
    'stickyOffset',
    'stickyShadowVisible',
    'stickyVisible',
    'enableContentBreak',
]);

const getRootDynamicStyle = ({
    theme,
    isHeader,
    stickyTop,
    stickyVisible,
    stickyAlignment,
    stickyOffset,
    stickyShadowVisible,
    disabled,
    ellipsis,
    enableContentBreak,
}: TableCellRootPropsType) => {
    const {
        componentOverrides: { TableCell },
    } = theme;

    let result = TableCell.Root.base;

    if (isHeader) {
        result = css`
            ${result};
            vertical-align: middle;
            ${TableCell.Root.header};
        `;
    }

    if (stickyTop) {
        result = css`
            ${result};
            position: sticky;
            z-index: ${zIndexTableHeader};
            top: 0;
            &::after {
                ${stickyShadowVisible ? "content: ''" : ''};
                position: absolute;
                bottom: -50px;
                left: 0;
                right: 0;
                height: 50px;
                background-color: transparent;
                pointer-events: none;
                border-top-width: 1px;
                border-top-style: solid;
                border-color: transparent;
                transition: box-shadow ${transitionDurationInSec}s ease;
            }

            ${stickyVisible ? TableCell.Root.stickyTop__visible : null};
        `;
    }

    if (!stickyTop && stickyAlignment === LEFT) {
        result = css`
            ${result};
            position: sticky;
            ${stickyAlignment}: ${stickyOffset}px;
            &::after {
                ${stickyShadowVisible ? "content: ''" : ''};
                position: absolute;
                right: -50px;
                top: 0;
                bottom: 0;
                width: 50px;
                background-color: transparent;
                pointer-events: none;
                border-left-width: 1px;
                border-left-style: solid;
                border-color: transparent;
                transition: box-shadow ${transitionDurationInSec}s ease,
                    border-color ${transitionDurationInSec}s ease;
            }

            ${TableCell.Root.sticky};
            ${stickyVisible ? TableCell.Root.stickyLeft__visible : null};
        `;
    }

    if (!stickyTop && stickyAlignment === RIGHT) {
        result = css`
            ${result};
            position: sticky;
            ${stickyAlignment}: ${stickyOffset}px;
            &::after {
                ${stickyShadowVisible ? "content: ''" : ''};
                position: absolute;
                left: -50px;
                top: 0;
                bottom: 0;
                width: 50px;
                background-color: transparent;
                pointer-events: none;
                border-right-width: 1px;
                border-right-style: solid;
                border-color: transparent;
                transition: box-shadow ${transitionDurationInSec}s ease,
                    border-color ${transitionDurationInSec}s ease;
            }

            ${TableCell.Root.sticky};
            ${stickyVisible ? TableCell.Root.stickyRight__visible : null};
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            cursor: not-allowed;
            ${TableCell.Root.disabled}
        `;
    }

    if (ellipsis) {
        result = css`
            ${result};
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `;
    }

    if (enableContentBreak) {
        result = css`
            ${result};
            word-break: break-word;
            overflow-wrap: break-word;
        `;
    }

    return result;
};

const contentAlignYToVerticalAlign = (align: string) =>
    align === 'center' ? 'middle' : align;

const tableCellContentAlignment = ({
    contentAlignX,
    contentAlignY,
}: TableCellContentAlignmentAttributesType) =>
    css`
        ${contentAlignX ? `text-align: ${contentAlignX};` : ''}
        ${contentAlignY
            ? `vertical-align: ${contentAlignYToVerticalAlign(contentAlignY)};`
            : ''}
    `;

const Wrapper = ({
    children,
    ...restProps
}: TableCellRootPropsType & {
    children: (props: TableCellRootPropsType) => ReactElement;
}) => children({ ...restProps });

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const TableCellStyle = styled(Wrapper).withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<TableCellRootPropsType>`
    box-sizing: border-box;

    text-align: left;
    vertical-align: top;
    transition: background-color 200ms ease;
    background-color: inherit;

    ${getRootDynamicStyle}
    ${paddingAttributes}
    ${widthAttributes}
    ${heightAttributes}
    ${colorAttributes}
    ${tableCellContentAlignment}
`;
