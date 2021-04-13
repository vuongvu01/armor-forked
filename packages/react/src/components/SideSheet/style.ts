import styled, { css } from 'styled-components';

import {
    SideSheetContainerPropsType,
    SideSheetContentPropsType,
    SideSheetHeaderContainerPropsType,
    SideSheetRootPropsType,
} from './type';
import {
    spacing,
    reset,
    zIndex,
    getComponentOverride,
    propsBlocker,
} from '../../system';
import { transitionDurationInSec } from '../../constants';
import { minWidth, widthWide, widthDefault } from './constants';

import { CloseButton } from '../CloseButton/CloseButton';

const calculateWidth = (effectToggle?: boolean, wide?: boolean) => {
    if (effectToggle) {
        return wide
            ? `max(${widthWide}, ${minWidth});`
            : `max(${widthDefault}, ${minWidth});`;
    }

    return '0';
};

const getWindowStyle = ({
    disableEffects,
    effectToggle,
    theme: {
        componentOverrides: { SideSheet },
    },
    wide,
}: SideSheetContainerPropsType) => {
    return css`
        ${SideSheet.Root.base};
        width: ${calculateWidth(effectToggle, wide)};
        transition: ${disableEffects
            ? 'none'
            : `width ${transitionDurationInSec}s ease`};
    `;
};

const contentStyle = ({
    theme: {
        componentOverrides: { SideSheet },
    },
}: SideSheetContentPropsType) => {
    return SideSheet.Content.base;
};

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
    background: white;
    display: flex;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: inherit;

    ${getWindowStyle};
`;

export const SideSheetContent = styled.div.withConfig(propsBlocker)<
    SideSheetContentPropsType
>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${contentStyle};
`;

export const SideSheetHeaderContainer = styled.div.withConfig(propsBlocker)<
    SideSheetHeaderContainerPropsType
>`
    display: flex;
    justify-content: flex-end;
`;

export const SideSheetCloseButton = styled(CloseButton)`
    margin-top: -${spacing(1)};
    margin-right: -${spacing(2.5)};
    position: absolute;
    top: ${spacing(6.5)};
    right: ${spacing(6.5)};
`;
