import styled, { css } from 'styled-components';

import { HeaderNavigationMenuRootPropsType } from './type';
import { ExpansionIndicator } from '../../ExpansionIndicator';
import { colorGrey05, colorGrey50 } from '../../../tokens';
import { transitionDurationInSec } from '../../../constants';

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

export const HeaderNavigationMenuContentContainer = styled.div<
    HeaderNavigationMenuRootPropsType
>`
    position: absolute;
    opacity: 0;

    ${contentContainerStyle}
`;

const expansionIndicatorItemStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenu },
    },
}: HeaderNavigationMenuRootPropsType) => {
    return HeaderNavigationMenu.ExpansionIndicatorItem.base;
};

export const MenuExpansionIndicatorItem = styled.div<
    HeaderNavigationMenuRootPropsType
>`
    ${expansionIndicatorItemStyle}
`;

export const HeaderNavigationMenuTitleContainer = styled.div<
    HeaderNavigationMenuRootPropsType
>`
    display: flex;
    align-items: center;
`;
export const HeaderNavigationMenuTitle = styled.div<
    HeaderNavigationMenuRootPropsType
>``;

export const MenuExpansionIndicator = styled(ExpansionIndicator)<
    HeaderNavigationMenuRootPropsType
>`
    .ExpansionIndicator-Content {
        background-color: ${colorGrey05};
        width: 40px;
    }
    .ExpansionIndicator-Icon {
        border-color: ${colorGrey50};
    }
`;
