import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import {
    colorProps,
    heightProps,
    paddingProps,
    widthProps,
    color,
    spacing,
    typography,
    propsBlocker,
    getComponentOverride,
    ellipsis as ellipsisCSS,
    LEFT,
    RIGHT,
    zIndexTableHeader,
    durationNormal,
    token,
    transition,
} from '@deliveryhero/armor-system';

import {
    TableCellContentAlignmentAttributesType,
    TableCellRootPropsType,
} from './type';

const getRootStyle = ({
    isHeader,
    stickyTop,
    stickyVisible,
    stickyAlignment,
    stickyOffset,
    stickyShadowVisible,
    disabled,
    ellipsis,
    enableContentWordBreak,
    enableContentWrap,
}: TableCellRootPropsType) => {
    let result = {};

    if (isHeader) {
        result = css`
            ${result};
            vertical-align: middle;
            ${typography('labelMedium')};
            color: ${token('body.color')};
            padding: ${spacing(4)};
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
                transition: box-shadow ${durationNormal}ms ease;
            }
        `;

        if (stickyVisible) {
            result = css`
                ${result};
                background-color: ${color('neutral.00')};

                &::after {
                    border-color: ${color('neutral.03')};
                    box-shadow: inset 0 10px 5px -5px rgba(0, 0, 0, 0.08);
                }
            `;
        }
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
                transition: box-shadow ${durationNormal}ms ease,
                    border-color ${durationNormal}ms ease;
            }
        `;

        if (stickyVisible) {
            result = css`
                ${result};
                background-color: ${color('neutral.00')};

                &::after {
                    border-color: ${color('neutral.03')};
                    box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.15);
                }
            `;
        }
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
                transition: box-shadow ${durationNormal}ms ease,
                    border-color ${durationNormal}ms ease;
            }

            &::before {
                content: '';
                display: none;
                z-index: -1;
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                background-color: ${color('neutral.00')};
                transition: background-color ${durationNormal}ms ease;
            }

            .TableRow--hovered &:not(th)::before {
                background-color: ${color('primary.01')};
            }
        `;

        if (stickyVisible) {
            result = css`
                ${result};
                background-color: ${color('neutral.00')};

                &::after {
                    border-color: ${color('neutral.03')};
                    box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.15);
                }

                &::before {
                    display: block;
                }
            `;
        }
    }

    if (disabled) {
        result = css`
            ${result};
            cursor: not-allowed;
            background-color: ${color('neutral.02')};
            color: ${color('neutral.05')};

            &:hover {
                background-color: ${color('neutral.02')};
            }
        `;
    }

    if (ellipsis) {
        result = css`
            ${result};
            ${ellipsisCSS};
        `;
    }

    if (enableContentWordBreak) {
        result = css`
            ${result};
            word-break: break-word;
            overflow-wrap: break-word;
        `;
    }

    if (!enableContentWrap) {
        result = css`
            ${result};
            white-space: nowrap;
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

/** 👉 ROOT ELEMENT */
export const TableCellRoot = styled(Wrapper).withConfig(
    propsBlocker,
)<TableCellRootPropsType>`
    box-sizing: border-box;
    text-align: left;
    vertical-align: top;
    ${transition({ 'background-color': true })};
    ${typography('paragraphLarge')};
    color: ${token('body.color')};
    padding: ${spacing(5, 4)};

    ${getRootStyle};
    ${getComponentOverride('TableCell')};
    ${paddingProps};
    ${widthProps};
    ${heightProps};
    ${colorProps};
    ${tableCellContentAlignment};
`;
