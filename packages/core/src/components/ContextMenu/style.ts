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
} from '@deliveryhero/armor-system';

import { ContextMenuRootPropsType, ContextMenuSubNodePropsType } from './type';

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

    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.12);

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
