import styled, { css } from 'styled-components';

import {
    HeaderNavigationMenuContentContainerPropsType,
    HeaderNavigationMenuRootPropsType,
} from './type';
import { ExpansionIndicator } from '../../ExpansionIndicator';
import { transitionDurationInSec } from '../../../constants';
import { color, getComponentOverride, propsBlocker } from '../../../system';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationMenuRoot = styled.div<
    HeaderNavigationMenuRootPropsType
>`
    cursor: pointer;
`;

const contentContainerStyle = ({
    isExpanded,
    theme: {
        componentOverrides: { HeaderNavigationMenu },
    },
}: HeaderNavigationMenuContentContainerPropsType) => {
    let result = HeaderNavigationMenu.ContentContainer.base;

    if (isExpanded) {
        result = css`
            ${result};
            transition: all ${transitionDurationInSec}s ease;
            opacity: 1;
        `;
    }

    return result;
};

export const HeaderNavigationMenuContentContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuContentContainerPropsType>`
    position: absolute;
    opacity: 0;
    z-index: 2048;

    ${contentContainerStyle};
`;

const expansionIndicatorItemStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenu },
    },
}: HeaderNavigationMenuRootPropsType) => {
    return HeaderNavigationMenu.ExpansionIndicatorItem.base;
};

export const MenuExpansionIndicatorItem = styled.div.withConfig(propsBlocker)<
    HeaderNavigationMenuRootPropsType
>`
    outline: none;
    ${expansionIndicatorItemStyle};
`;

export const HeaderNavigationMenuTitleContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuRootPropsType>`
    display: flex;
    align-items: center;
`;
export const HeaderNavigationMenuTitle = styled.div.withConfig(propsBlocker)<
    HeaderNavigationMenuRootPropsType
>``;

export const MenuExpansionIndicator = styled(ExpansionIndicator)<
    HeaderNavigationMenuRootPropsType
>`
    .ExpansionIndicator-Content {
        background-color: ${color('neutral.02')};
        width: 40px;
    }
    .ExpansionIndicator-Icon {
        color: ${color('neutral.11')};
    }

    ${getComponentOverride('HeaderNavigationMenu')};
`;
