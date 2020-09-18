import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import {
    TableCellContentAlignmentAttributesType,
    TableCellRootPropsType,
} from './type';
import { ObjectLiteralType } from '../../../type';
import { shouldForwardProp } from '../../../utils';
import {
    colorAttributes,
    heightAttributes,
    paddingAttributes,
    widthAttributes,
} from '../../../system/attributes';
import { zIndexTableHeader } from '../../../tokens';
import { transitionDurationInSec } from '../../../constants';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    isHeader: true,
    stickyTop: true,
    stickyLeft: true,
    stickyRight: true,
    stickyVisible: true,
    stickyLeftOffset: true,
    stickyShadowVisible: true,
    contentAlignX: true,
    contentAlignY: true,
    disabled: true,
    ellipsis: true,
} as ObjectLiteralType;

const getRootBaseStyle = ({ theme }: TableCellRootPropsType) =>
    theme.componentOverrides.TableCell.Root.base;

const getRootDynamicStyle = ({
    theme,
    isHeader,
    stickyTop,
    stickyVisible,
    stickyLeft,
    stickyRight,
    stickyLeftOffset,
    stickyShadowVisible,
    disabled,
    ellipsis,
}: TableCellRootPropsType) => {
    const {
        componentOverrides: { TableCell },
    } = theme;

    let result = {};

    if (isHeader) {
        result = css`
            cursor: pointer;
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

    if (!stickyTop && stickyLeft) {
        result = css`
            ${result};
            position: sticky;
            left: ${stickyLeftOffset || 0};
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

    if (!stickyTop && stickyRight) {
        result = css`
            ${result};
            position: sticky;
            right: 0;
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
            cursor: initial;
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
    word-wrap: break-word;
    transition: background-color 200ms ease;
    background-color: inherit;

    ${getRootBaseStyle}
    ${getRootDynamicStyle}
    ${paddingAttributes}
    ${widthAttributes}
    ${heightAttributes}
    ${colorAttributes}
    ${tableCellContentAlignment}
`;
