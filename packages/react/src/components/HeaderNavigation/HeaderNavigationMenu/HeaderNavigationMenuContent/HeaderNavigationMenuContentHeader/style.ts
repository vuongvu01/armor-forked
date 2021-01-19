import styled from 'styled-components';

import { HeaderNavigationMenuContentHeaderRootPropsType } from './type';
import { Typography } from '../../../../Typography';
import { getComponentOverride } from '../../../../../system/mixins/getComponentOverride';
import { color, spacing } from '../../../../../system/mixins';
import { getPropsBlocker } from '../../../../../utils';

export const HeaderNavigationMenuContentHeaderRoot = styled.div.withConfig(
    getPropsBlocker(),
)<HeaderNavigationMenuContentHeaderRootPropsType>`
    box-sizing: border-box;
    height: 64px;

    background-color: ${color('neutral.02')};
    padding: ${spacing(2)} ${spacing(4)};

    ${getComponentOverride('HeaderNavigationMenuContentHeader')};
`;

export const MenuContentHeader = styled.div.withConfig(getPropsBlocker())<
    HeaderNavigationMenuContentHeaderRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 100%;
`;

export const MenuContentHeaderItem = styled.div.withConfig(getPropsBlocker())<
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

export const MenuContentHeaderTitle = styled(Typography).withConfig(
    getPropsBlocker({}, false),
)<HeaderNavigationMenuContentHeaderRootPropsType>`
    ${contentHeaderTitleStyle}
`;

const contentHeaderLabelStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContentHeader },
    },
}: HeaderNavigationMenuContentHeaderRootPropsType) => {
    return HeaderNavigationMenuContentHeader.Label.base;
};

export const MenuContentHeaderLabel = styled(Typography).withConfig(
    getPropsBlocker({}, false),
)<HeaderNavigationMenuContentHeaderRootPropsType>`
    ${contentHeaderLabelStyle}
`;
