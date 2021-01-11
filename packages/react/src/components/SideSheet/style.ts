import styled, { css } from 'styled-components';

import { shouldForwardProp } from '../../utils';
import {
    SideSheetContainerPropsType,
    SideSheetContentPropsType,
    SideSheetHeaderCloseButtonContainerPropsType,
    SideSheetHeaderCloseButtonContentPropsType,
    SideSheetHeaderContainerPropsType,
} from './type';
import { transitionDurationInSec } from '../../constants';
import {
    minWidth,
    widthWide,
    widthDefault,
    closeIconOffset,
} from './constants';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const blacklistProperties = {
    effectToggle: true,
    disableEffects: true,
};

const calculateWidth = (effectToggle?: boolean, wide?: boolean) => {
    if (effectToggle) {
        return wide
            ? `max(${widthWide}, ${minWidth});`
            : `max(${widthDefault}, ${minWidth});`;
    }

    return '0';
};

const containerStyle = ({
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

const closeIconContainerStyle = ({
    theme: {
        componentOverrides: { SideSheet },
    },
}: SideSheetContentPropsType) => SideSheet.Icon.base;

const closeIconStyle = ({
    theme: {
        componentOverrides: { SideSheet },
    },
}: SideSheetContentPropsType) => SideSheet.Icon.focused;

export const SideSheetRoot = styled.div.withConfig({
    shouldForwardProp: property =>
        shouldForwardProp(property, blacklistProperties),
})<SideSheetContainerPropsType>`
    background: white;
    display: flex;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: inherit;

    ${containerStyle}
    ${getComponentOverride('SideSheet')};
`;

export const SideSheetContent = styled.div<SideSheetContentPropsType>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    ${contentStyle}
`;

export const SideSheetHeaderContainer = styled.div<
    SideSheetHeaderContainerPropsType
>`
    display: flex;
    justify-content: flex-end;
`;

export const SideSheetHeaderCloseButtonContainer = styled.div<
    SideSheetHeaderCloseButtonContainerPropsType
>`
    display: flex;
    justify-content: flex-end;
    margin-top: -${closeIconOffset}px;
    margin-right: -${closeIconOffset}px;

    ${closeIconContainerStyle}
`;

export const SideSheetHeaderCloseButtonContent = styled.div<
    SideSheetHeaderCloseButtonContentPropsType
>`
    height: 32px;
    width: 32px;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
        ${closeIconStyle}
    }
`;

export const iconStyle = { outline: 'none', margin: `${closeIconOffset}px` };
