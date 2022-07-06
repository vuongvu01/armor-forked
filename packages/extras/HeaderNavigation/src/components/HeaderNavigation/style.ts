import styled from 'styled-components';
import {
    marginProps,
    color,
    spacing,
    propsBlocker,
    typography,
    token,
} from '@deliveryhero/armor-system';

import {
    HeaderNavigationRootPropsType,
    HeaderNavigationTitleRootPropsType,
} from './type';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationRootPropsType>`
    display: block;
    min-height: ${spacing(12)};
    border-top: 1px solid
        ${({ brandColor }) => brandColor || color('primary.07')};
    background-color: ${color('neutral.00')};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
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
    padding: ${spacing(0, 2)};
`;

export const HeaderNavigationContentRight = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
