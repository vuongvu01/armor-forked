import styled, { css } from 'styled-components';
import {
    borderRadius,
    color,
    spacing,
    typography,
    sizeProps,
    zIndex,
    propsBlocker,
    getComponentOverride,
    paddingProps,
    popperArrow,
    popperArrowPlacement,
    elevation,
} from '@deliveryhero/armor-system';

import { ContextMenuRootPropsType, ContextMenuSubNodePropsType } from './type';

const getRootStyle = ({ displayMenuElements }: ContextMenuRootPropsType) => {
    let result = {};

    if (displayMenuElements) {
        result = css`
            ${result};
            padding-top: ${spacing(4)};
            padding-bottom: ${spacing(4)};
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const ContextMenuRoot = styled.div.withConfig(
    propsBlocker,
)<ContextMenuRootPropsType>`
    box-sizing: border-box;
    margin: 0;
    text-align: left;

    ${typography('paragraphLarge')};
    color: ${color('neutral.07')};
    border-radius: ${borderRadius('soft')};
    background-color: ${color('neutral.00')};
    box-shadow: ${elevation('small')};
    ${popperArrowPlacement('ContextMenu-Arrow')};
    ${zIndex};
    ${getRootStyle};
    ${getComponentOverride('ContextMenu')};
    ${sizeProps};
    ${paddingProps};
`;

export const ContextMenuArrow = styled.div.withConfig(
    propsBlocker,
)<ContextMenuSubNodePropsType>`
    ${popperArrow}
`;
