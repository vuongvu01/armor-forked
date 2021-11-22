import styled, { css } from 'styled-components';

import {
    marginProps,
    paddingProps,
    sizeProps,
    widthProps,
    propsBlocker,
    gutter,
} from '@deliveryhero/armor-system';
import { FlexItemPropsType, FlexRootPropsType } from './type';

const flexRootStyle = ({
    direction,
    justifyContent,
    alignContent,
    alignItems,
    flexWrap,
    gutterSpacing,
}: FlexRootPropsType) => {
    let result = {};

    if (direction) {
        result = css`
            ${result};
            flex-direction: ${direction};
        `;
    }

    if (justifyContent) {
        result = css`
            ${result};
            justify-content: ${justifyContent};
        `;
    }

    if (alignContent) {
        result = css`
            ${result};
            align-content: ${alignContent};
        `;
    }

    if (flexWrap) {
        result = css`
            ${result};
            flex-wrap: ${flexWrap};
        `;
    }

    if (alignItems) {
        result = css`
            ${result};
            align-items: ${alignItems};
        `;
    }

    if (gutterSpacing) {
        result = css`
            ${result};
            && {
                ${gutter({ spacing: gutterSpacing })};
            }
        `;
    }

    return result;
};

const flexItemStyle = ({
    flexGrow,
    flexShrink,
    flexBasis,
    order,
    alignSelf,
}: FlexItemPropsType) => {
    let result = {};

    if (typeof flexGrow !== 'undefined') {
        result = css`
            ${result};
            flex-grow: ${flexGrow};
        `;
    }

    if (typeof flexShrink !== 'undefined') {
        result = css`
            ${result};
            flex-shrink: ${flexShrink};
        `;
    }

    if (typeof flexBasis !== 'undefined') {
        result = css`
            ${result};
            flex-basis: ${flexBasis};
        `;
    }

    if (typeof order !== 'undefined') {
        result = css`
            ${result};
            order: ${order};
        `;
    }

    if (alignSelf) {
        result = css`
            ${result};
            align-self: ${alignSelf};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const FlexRoot = styled.div.withConfig(propsBlocker)<FlexRootPropsType>`
    display: flex;

    ${flexRootStyle}
    ${sizeProps}
    ${marginProps}
`;

/** 👉 ROOT ELEMENT */
export const FlexItemRoot = styled.div.withConfig(propsBlocker)<
    FlexItemPropsType
>`
    ${flexItemStyle}
    ${paddingProps}
    ${widthProps}
`;
