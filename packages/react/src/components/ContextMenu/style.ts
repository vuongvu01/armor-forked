import styled, { css } from 'styled-components';
import { ContextMenuRootPropsType, ContextMenuSubNodePropsType } from './type';
import {
    borderRadius,
    color,
    spacing,
    typography,
    sizeAttributes,
    zIndex,
    propsBlocker,
    getComponentOverride,
} from '../../system';
import { popperArrow, popperArrowPlacement } from '../../utils/popper';

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
export const ContextMenuRoot = styled.div.withConfig(propsBlocker)<
    ContextMenuRootPropsType
>`
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

export const ContextMenuArrow = styled.div.withConfig(propsBlocker)<
    ContextMenuSubNodePropsType
>`
    ${popperArrow}
`;
