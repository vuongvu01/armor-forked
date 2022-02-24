import styled, { css } from 'styled-components';
import {
    color,
    getComponentOverride,
    propsBlocker,
    spacing,
    token,
    transition,
} from '@deliveryhero/armor-system';

import {
    HeaderNavigationMenuContentContainerPropsType,
    HeaderNavigationMenuRootPropsType,
} from './type';
import { ExpansionIndicator } from '../../ExpansionIndicator';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationMenuRoot = styled.div<HeaderNavigationMenuRootPropsType>`
    cursor: pointer;
`;

const getContentContainerStyle = ({
    isExpanded,
}: HeaderNavigationMenuContentContainerPropsType) => {
    if (isExpanded) {
        return css`
            ${transition({ all: true })};
            opacity: 1;
        `;
    }

    return '';
};

export const HeaderNavigationMenuContentContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuContentContainerPropsType>`
    position: absolute;
    opacity: 0;
    z-index: 2048;
    background-color: ${color('neutral.00')};
    box-shadow: ${token('elevation.large')};
    margin-top: ${spacing(5)};
    ${getContentContainerStyle};
`;

export const MenuExpansionIndicatorItem = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuRootPropsType>`
    outline: none;
    height: ${spacing(5)};
`;

export const HeaderNavigationMenuTitleContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuRootPropsType>`
    display: flex;
    align-items: center;
`;
export const HeaderNavigationMenuTitle = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuRootPropsType>``;

export const MenuExpansionIndicator = styled(
    ExpansionIndicator,
)<HeaderNavigationMenuRootPropsType>`
    .ExpansionIndicator-Content {
        background-color: ${color('neutral.02')};
        width: 40px;
    }
    ${getComponentOverride('HeaderNavigationMenu')};
`;
