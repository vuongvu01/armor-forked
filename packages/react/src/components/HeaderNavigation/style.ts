import styled from 'styled-components';

import {
    HeaderNavigationRootPropsType,
    HeaderNavigationTitleRootPropsType,
} from './type';
import {
    getComponentOverride,
    marginAttributes,
    color,
    spacing,
    propsBlocker,
} from '../../system';

const headerNavigationRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigation },
    },
}: HeaderNavigationRootPropsType) => {
    return HeaderNavigation.Root.base;
};

/** 👉 ROOT ELEMENT */
export const HeaderNavigationRoot = styled.div.withConfig(propsBlocker)<
    HeaderNavigationRootPropsType
>`
    display: block;
    min-height: ${spacing(12)};
    border-bottom: 1px solid ${color('neutral.03')};

    ${headerNavigationRootStyle};
    ${getComponentOverride('HeaderNavigation')};
    ${marginAttributes};
`;

export const HeaderNavigationTitleRoot = styled.div.withConfig(propsBlocker)<
    HeaderNavigationTitleRootPropsType
>``;

export const HeaderNavigationContent = styled.div.withConfig(propsBlocker)<
    HeaderNavigationRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavigationContentItem = styled.div.withConfig(propsBlocker)<
    HeaderNavigationRootPropsType
>``;

export const HeaderNavigationContentLeft = styled.div.withConfig(propsBlocker)<
    HeaderNavigationRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavigationContentRight = styled.div.withConfig(propsBlocker)<
    HeaderNavigationRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
