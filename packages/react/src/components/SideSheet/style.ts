import styled, { css } from 'styled-components';

import {
    SideSheetContainerPropsType,
    SideSheetContentPropsType,
    SideSheetEffectivePropsType,
    SideSheetHeaderContainerPropsType,
    SideSheetRootPropsType,
} from './type';
import {
    spacing,
    reset,
    zIndex,
    getComponentOverride,
    propsBlocker,
    token,
    color,
} from '../../system';
import { SCALE_SMALL, transitionDurationInSec } from '../../constants';
import { minWidth, widthWide, widthDefault } from './constants';

import { CloseButton } from '../CloseButton';
import { componentSpacing06 } from '../../tokens';

const calculateWidth = (
    effectToggle?: boolean,
    wide?: boolean,
    scale?: SideSheetEffectivePropsType['scale'],
) => {
    // this basically means that the SideSheet is open
    if (effectToggle) {
        // todo: we only support 'small' for now
        if (scale === SCALE_SMALL) {
            return spacing(100);
        }

        return wide
            ? `max(${widthWide}, ${minWidth});`
            : `max(${widthDefault}, ${minWidth});`;
    }

    return '0';
};

const getWindowStyle = ({
    disableEffects,
    effectToggle,
    wide,
    scale,
}: SideSheetContainerPropsType) => {
    return css`
        width: ${calculateWidth(effectToggle, wide, scale)};
        transition: ${disableEffects
            ? 'none'
            : `width ${transitionDurationInSec}s ease`};
    `;
};

/** 👉 ROOT ELEMENT */
export const SideSheetRoot = styled.div.withConfig(propsBlocker)<
    SideSheetRootPropsType
>`
    ${reset};
    ${zIndex};
    ${getComponentOverride('SideSheet')};
`;

export const SideSheetWindow = styled.div.withConfig(propsBlocker)<
    SideSheetContainerPropsType
>`
    display: flex;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: inherit;
    background-color: ${color('neutral.00')};
    box-shadow: ${token('elevation.medium')};
    ${getWindowStyle};
`;

export const SideSheetContent = styled.div.withConfig(propsBlocker)<
    SideSheetContentPropsType
>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const SideSheetHeaderContainer = styled.div.withConfig(propsBlocker)<
    SideSheetHeaderContainerPropsType
>`
    display: flex;
    justify-content: flex-end;
    padding: ${spacing(componentSpacing06)} ${spacing(componentSpacing06)} 0
        ${spacing(componentSpacing06)};
`;

export const SideSheetCloseButton = styled(CloseButton)`
    margin-top: -${spacing(1)};
    margin-right: -${spacing(2.5)};
    position: absolute;
    top: ${spacing(6.5)};
    right: ${spacing(6.5)};
`;
