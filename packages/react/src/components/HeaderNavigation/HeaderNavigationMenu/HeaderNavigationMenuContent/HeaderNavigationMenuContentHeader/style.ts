import styled from 'styled-components';

import { HeaderNavigationMenuContentHeaderRootPropsType } from './type';
import { Typography } from '../../../../Typography';
import {
    color,
    spacing,
    propsBlocker,
    getComponentOverride,
} from '../../../../../system';

export const HeaderNavigationMenuContentHeaderRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuContentHeaderRootPropsType>`
    box-sizing: border-box;
    height: 64px;

    background-color: ${color('neutral.02')};
    padding: ${spacing(2)} ${spacing(4)};

    ${getComponentOverride('HeaderNavigationMenuContentHeader')};
`;

export const MenuContentHeader = styled.div.withConfig(propsBlocker)<
    HeaderNavigationMenuContentHeaderRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 100%;
`;

export const MenuContentHeaderItem = styled.div.withConfig(propsBlocker)<
    HeaderNavigationMenuContentHeaderRootPropsType
>`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const contentHeaderTitleStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContentHeader },
    },
}: HeaderNavigationMenuContentHeaderRootPropsType) => {
    return HeaderNavigationMenuContentHeader.Title.base;
};

export const MenuContentHeaderTitle = styled(Typography)<
    HeaderNavigationMenuContentHeaderRootPropsType
>`
    ${contentHeaderTitleStyle}
`;

const contentHeaderLabelStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContentHeader },
    },
}: HeaderNavigationMenuContentHeaderRootPropsType) => {
    return HeaderNavigationMenuContentHeader.Label.base;
};

export const MenuContentHeaderLabel = styled(Typography)<
    HeaderNavigationMenuContentHeaderRootPropsType
>`
    ${contentHeaderLabelStyle};
`;
