import styled, { css } from 'styled-components';
import { ContextMenuRootPropsType, ContextMenuSubNodePropsType } from './type';
import { getPropsBlocker } from '../../utils';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';
import {
    borderRadius,
    color,
    spacing,
    typography,
    sizeAttributes,
    zIndex,
} from '../../system';
import { popperArrow, popperArrowPlacement } from '../../utils/popper';

// all custom properties should be listed here to prevent being forwarded to the DOM nodes as attributes
const propertyList = {
    displayMenuElements: true,
    zIndex: true,
};

const getRootStyle = ({ displayMenuElements }: ContextMenuRootPropsType) => {
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
export const ContextMenuRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<ContextMenuRootPropsType>`
    box-sizing: border-box;
    margin: 0;
    text-align: left;

    ${typography('paragraphLarge')};
    border-radius: ${borderRadius('soft')};
    color: ${color('neutral.05')};
    background-color: ${color('neutral.00')};

    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);

    ${popperArrowPlacement('ContextMenu-Arrow')};
    ${zIndex};
    ${getRootStyle};
    ${getComponentOverride('ContextMenu')};
    ${sizeAttributes};
`;

export const ContextMenuArrow = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<ContextMenuSubNodePropsType>`
    ${popperArrow}
`;
