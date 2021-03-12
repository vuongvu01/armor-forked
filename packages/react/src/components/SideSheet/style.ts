import styled, { css } from 'styled-components';

import { getPropsBlocker } from '../../utils';
import {
    SideSheetContainerPropsType,
    SideSheetContentPropsType,
    SideSheetHeaderContainerPropsType,
    SideSheetRootPropsType,
} from './type';
import { spacing, reset, zIndex } from '../../system';
import { transitionDurationInSec } from '../../constants';
import { minWidth, widthWide, widthDefault } from './constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

import { CloseButton } from '../CloseButton/CloseButton';

const propertyList = {
    effectToggle: true,
    disableEffects: true,
    zIndex: true,
};

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

export const SideSheetRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<SideSheetRootPropsType>`
    ${reset};
    ${zIndex};
    ${getComponentOverride('SideSheet')};
`;

export const SideSheetWindow = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<SideSheetContainerPropsType>`
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

export const SideSheetContent = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<SideSheetContentPropsType>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${contentStyle};
`;

export const SideSheetHeaderContainer = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<SideSheetHeaderContainerPropsType>`
    display: flex;
    justify-content: flex-end;
`;

export const SideSheetCloseButton = styled(CloseButton)`
    margin-top: -${spacing(2.5)};
    margin-right: -${spacing(2.5)};
    position: absolute;
    top: ${spacing(6.5)};
    right: ${spacing(6.5)};
`;
