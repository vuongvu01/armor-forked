import styled, { css } from 'styled-components';

import {
    marginAttributes,
    paddingAttributes,
    sizeAttributes,
    widthAttributes,
} from '../../system/attributes';
import { makePropList, shouldForwardProp } from '../../utils';
import { FlexItemPropsType, FlexRootPropsType } from './type';

const propertyList = makePropList([
    'justifyContent',
    'direction',
    'alignItems',
    'alignContent',
    'flexGrow',
    'alignSelf',
    'flexWrap',
]);

const flexRootStyle = ({
    direction,
    justifyContent,
    alignContent,
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

    if (alignContent) {
        result = css`
            ${result}
             align-content: ${alignContent};
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
    ${sizeAttributes}
    ${marginAttributes}
`;

export const FlexItemRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<FlexItemPropsType>`
    ${flexItemStyle}
    ${paddingAttributes}
    ${widthAttributes}
`;
