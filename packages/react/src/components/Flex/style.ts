import styled, { css } from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { shouldForwardProp } from '../../utils';
import { FlexItemPropsType, FlexRootPropsType } from './type';
import { ObjectLiteralType } from '../../type';

const propertyList = {
    justifyContent: true,
    direction: 'row',
    alignItems: true,
    flexGrow: true,
    alignSelf: true,
} as ObjectLiteralType;

const flexRootStyle = ({
    direction,
    justifyContent,
    alignItems,
    flexWrap,
}: FlexItemPropsType) => {
    let result = css``;

    if (direction) {
        result = css`
            ${result}
             flex-direction:  ${direction};
        `;
    }

    if (justifyContent) {
        result = css`
            ${result}
             justify-content: ${justifyContent};
        `;
    }

    if (flexWrap) {
        result = css`
            ${result}
             flex-wrap: ${flexWrap};
        `;
    }

    if (alignItems) {
        result = css`
            ${result}
             align-items:  ${alignItems};
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
    let result = css``;

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

export const FlexRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<FlexRootPropsType>`
    display: flex;

    ${flexRootStyle}
`;

export const FlexItemRoot = styled.div<FlexItemPropsType>`
    ${flexItemStyle}
`;
