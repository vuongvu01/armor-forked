import styled from 'styled-components';
import {
    color,
    spacing,
    propsBlocker,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import {
    HeaderNavigationMenuContentHeaderRootPropsType,
    HeaderNavigationMenuContentHeaderTitlePropsType,
} from './type';
import { Typography } from '../../../../Typography';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationMenuContentHeaderRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuContentHeaderRootPropsType>`
    box-sizing: border-box;
    height: 64px;
    background-color: ${color('neutral.02')};
    padding: ${spacing(2, 4)};
    ${getComponentOverride('HeaderNavigationMenuContentHeader')};
`;

export const MenuContentHeader = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuContentHeaderRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 100%;
`;

export const MenuContentHeaderItem = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuContentHeaderRootPropsType>`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MenuContentHeaderTitle = styled(
    Typography,
)<HeaderNavigationMenuContentHeaderTitlePropsType>`
    margin-bottom: ${spacing(1)};
    color: ${color('neutral.07')};
`;

export const MenuContentHeaderLabel = styled(
    Typography,
)<HeaderNavigationMenuContentHeaderRootPropsType>`
    margin: 0;
`;
