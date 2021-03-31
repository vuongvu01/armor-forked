import styled from 'styled-components';

import { marginAttributes } from '../../system/attributes';
import { getPropsBlocker } from '../../utils';
import {
    HeaderNavigationRootPropsType,
    HeaderNavigationTitleRootPropsType,
} from './type';
import { ObjectLiteralType } from '../../type';
import { color, spacing } from '../../system/mixins';
import { getComponentOverride } from '../../system/mixins/getComponentOverride';

const propertyList = {
    justifyContent: true,
    direction: true,
    alignItems: true,
    flexGrow: true,
    alignSelf: true,
    onSearchItemSelect: true,
} as ObjectLiteralType;

const headerNavigationRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigation },
    },
}: HeaderNavigationRootPropsType) => {
    return HeaderNavigation.Root.base;
};

export const HeaderNavigationRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<HeaderNavigationRootPropsType>`
    display: block;
    min-height: ${spacing(12)};
    border-bottom: 1px solid ${color('neutral.03')};

    ${headerNavigationRootStyle}
    ${getComponentOverride('HeaderNavigation')};
    ${marginAttributes}
`;

export const HeaderNavigationTitleRoot = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<HeaderNavigationTitleRootPropsType>``;

export const HeaderNavigationContent = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<HeaderNavigationRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavigationContentItem = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<HeaderNavigationRootPropsType>``;

export const HeaderNavigationContentLeft = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<HeaderNavigationRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavigationContentRight = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<HeaderNavigationRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
