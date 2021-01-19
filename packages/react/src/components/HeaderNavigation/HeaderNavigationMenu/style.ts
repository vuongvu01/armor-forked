import styled, { css } from 'styled-components';

import { HeaderNavigationMenuRootPropsType } from './type';
import { ExpansionIndicator } from '../../ExpansionIndicator';
import { transitionDurationInSec } from '../../../constants';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { color } from '../../../system/mixins';
import { getPropsBlocker } from '../../../utils';

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
}: HeaderNavigationMenuRootPropsType) => {
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
    getPropsBlocker(),
)<HeaderNavigationMenuRootPropsType>`
    position: absolute;
    opacity: 0;
    z-index: 2048;

    ${contentContainerStyle}
`;

const expansionIndicatorItemStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenu },
    },
}: HeaderNavigationMenuRootPropsType) => {
    return HeaderNavigationMenu.ExpansionIndicatorItem.base;
};

export const MenuExpansionIndicatorItem = styled.div.withConfig(
    getPropsBlocker(),
)<HeaderNavigationMenuRootPropsType>`
    ${expansionIndicatorItemStyle}
`;

export const HeaderNavigationMenuTitleContainer = styled.div.withConfig(
    getPropsBlocker(),
)<HeaderNavigationMenuRootPropsType>`
    display: flex;
    align-items: center;
`;
export const HeaderNavigationMenuTitle = styled.div.withConfig(
    getPropsBlocker(),
)<HeaderNavigationMenuRootPropsType>``;

export const MenuExpansionIndicator = styled(ExpansionIndicator).withConfig(
    getPropsBlocker({}, false),
)<HeaderNavigationMenuRootPropsType>`
    .ExpansionIndicator-Content {
        background-color: ${color('neutral.02')};
        width: 40px;
    }
    .ExpansionIndicator-Icon {
        color: ${color('neutral.06')};
    }

    ${getComponentOverride('HeaderNavigationMenu')};
`;
