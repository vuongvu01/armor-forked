import styled, { css } from 'styled-components';
import { ContextMenuRootPropsType, ContextMenuSubNodePropsType } from './type';
import { shouldForwardProp, makePropList } from '../../utils';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import { borderRadius, color, spacing, typography } from '../../system/mixins';
import { sizeAttributes } from '../../system/attributes';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = makePropList(['displayMenuElements']);

const getRootDynamicStyle = ({
    displayMenuElements,
}: ContextMenuRootPropsType) => {
    let result = {};

    if (displayMenuElements) {
        result = css`
            ${result};
            padding-top: ${spacing(2)};
            padding-bottom: ${spacing(2)};
        `;
    }

    return result;
};

// if a new node is to be created, don't forget to use shouldForwardProp similarly to this:
export const ContextMenuRoot = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<ContextMenuRootPropsType>`
    box-sizing: border-box;
    margin: 0;
    text-align: left;

    ${typography('paragraphLarge')};
    ${borderRadius('soft')};
    color: ${color('neutral.05')};
    background-color: ${color('neutral.00')};

    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);

    &[data-popper-placement^='top'] > .ContextMenu-Arrow {
        bottom: -8px;
    }
    &[data-popper-placement^='bottom'] > .ContextMenu-Arrow {
        top: -8px;
    }

    ${getRootDynamicStyle}
    ${getComponentOverride('ContextMenu')};
    ${sizeAttributes};
`;

export const ContextMenuArrow = styled.div.withConfig({
    shouldForwardProp: property => shouldForwardProp(property, propertyList),
})<ContextMenuSubNodePropsType>`
    height: 16px;
    width: 16px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        background-color: ${color('neutral.00')};
        width: 10px;
        height: 10px;
        content: '';
        transform: rotate(45deg);
        transform-origin: center;
    }
`;
