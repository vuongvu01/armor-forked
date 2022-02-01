import styled from 'styled-components';
import {
    getComponentOverride,
    marginProps,
    color,
    spacing,
    propsBlocker,
} from '@deliveryhero/armor-system';

import {
    HeaderNavigationRootPropsType,
    HeaderNavigationTitleRootPropsType,
} from './type';

const headerNavigationRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigation },
    },
}: HeaderNavigationRootPropsType) => {
    return HeaderNavigation.Root.base;
};

/** 👉 ROOT ELEMENT */
export const HeaderNavigationRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationRootPropsType>`
    display: block;
    min-height: ${spacing(12)};
    border-bottom: 1px solid ${color('neutral.03')};

    ${headerNavigationRootStyle};
    ${getComponentOverride('HeaderNavigation')};
    ${marginProps};
`;

export const HeaderNavigationTitleRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationTitleRootPropsType>``;

export const HeaderNavigationContent = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavigationContentItem = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationRootPropsType>``;

export const HeaderNavigationContentLeft = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavigationContentRight = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
