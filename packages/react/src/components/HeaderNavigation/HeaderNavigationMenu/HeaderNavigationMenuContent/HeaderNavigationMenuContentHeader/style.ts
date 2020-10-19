import styled from 'styled-components';

import { HeaderNavigationMenuContentHeaderRootPropsType } from './type';
import { Typography } from '../../../../Typography';
import { Pack, PackItem } from '../../../../Pack';

const contentHeaderRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContentHeader },
    },
}: HeaderNavigationMenuContentHeaderRootPropsType) => {
    return HeaderNavigationMenuContentHeader.Root.base;
};

export const HeaderNavigationMenuContentHeaderRoot = styled.div<
    HeaderNavigationMenuContentHeaderRootPropsType
>`
    box-sizing: border-box;
    height: 64px;

    ${contentHeaderRootStyle}
`;

export const MenuContentHeaderPack = styled(Pack)<
    HeaderNavigationMenuContentHeaderRootPropsType
>`
    height: 100%;
`;

export const MenuContentHeaderPackItem = styled(PackItem)<
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
    ${contentHeaderLabelStyle}
`;
