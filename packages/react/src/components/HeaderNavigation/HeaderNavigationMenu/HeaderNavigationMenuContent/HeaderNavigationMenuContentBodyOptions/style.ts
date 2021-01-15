import styled, { css } from 'styled-components';

import { HeaderNavigationMenuContentBodyOptionsRootPropsType } from '../HeaderNavigationMenuContentBody/type';
import {
    HeaderNavigationMenuContentBodyOptionsCategoryPropsType,
    HeaderNavigationMenuContentBodyOptionsItemPropsType,
} from '../type';
import { Stack, StackItem } from '../../../../Stack';
import { getComponentOverride } from '../../../../../system/mixins/getComponentOverride';
import { color } from '../../../../../system/mixins';
import { getPropsBlocker } from '../../../../../utils';

const contentBodyOptionsRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContentBodyOptions },
    },
}: HeaderNavigationMenuContentBodyOptionsRootPropsType) => {
    return HeaderNavigationMenuContentBodyOptions.Root.base;
};

const propertyList = {
    isActive: true,
};

const contentBodyOptionsItemStyle = ({
    isActive,
    theme: {
        componentOverrides: { HeaderNavigationMenuContentBodyOptions },
    },
}: HeaderNavigationMenuContentBodyOptionsItemPropsType) => {
    let result = HeaderNavigationMenuContentBodyOptions.Item.base;

    if (isActive) {
        result = css`
            ${result};
            border-left-width: 2px;
            border-left-style: solid;
            padding-left: 14px;
            border-left-color: ${color('primary.main')};
            background-color: ${color('primary.lightest')};
            color: ${color('neutral.06')};
        `;
    }

    return result;
};

const contentBodyOptionsCategoryStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContentBodyOptions },
    },
}: HeaderNavigationMenuContentBodyOptionsCategoryPropsType) => {
    return HeaderNavigationMenuContentBodyOptions.Category.base;
};

export const HeaderNavigationMenuContentBodyOptionsItem = styled(
    StackItem,
).withConfig(getPropsBlocker(propertyList, false))<
    HeaderNavigationMenuContentBodyOptionsItemPropsType
>`
    cursor: pointer;
    box-sizing: border-box;

    ${contentBodyOptionsItemStyle};
`;

export const HeaderNavigationMenuContentBodyOptionsRoot = styled(
    Stack,
).withConfig(getPropsBlocker(propertyList, false))<
    HeaderNavigationMenuContentBodyOptionsRootPropsType
>`
    ${contentBodyOptionsRootStyle}
    ${getComponentOverride('HeaderNavigationMenuContentBodyOptions')};
`;

export const HeaderNavigationMenuContentBodyOptionsCategory = styled(
    StackItem,
).withConfig(getPropsBlocker(propertyList, false))<
    HeaderNavigationMenuContentBodyOptionsCategoryPropsType
>`
    cursor: default;
    text-transform: uppercase;

    ${contentBodyOptionsCategoryStyle}
`;
