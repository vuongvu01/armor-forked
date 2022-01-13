import styled, { css } from 'styled-components';
import { color, getComponentOverride } from '@deliveryhero/armor-system';

import { HeaderNavigationMenuContentBodyOptionsRootPropsType } from '../HeaderNavigationMenuContentBody/type';
import {
    HeaderNavigationMenuContentBodyOptionsCategoryPropsType,
    HeaderNavigationMenuContentBodyOptionsItemPropsType,
} from '../type';
import { Stack, StackItem } from '../../../../Stack';

const contentBodyOptionsRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContentBodyOptions },
    },
}: HeaderNavigationMenuContentBodyOptionsRootPropsType) => {
    return HeaderNavigationMenuContentBodyOptions.Root.base;
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
            color: ${color('neutral.11')};
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

export const HeaderNavigationMenuContentBodyOptionsItem = styled(StackItem)<
    HeaderNavigationMenuContentBodyOptionsItemPropsType
>`
    cursor: pointer;
    box-sizing: border-box;

    ${contentBodyOptionsItemStyle};
`;

/** 👉 ROOT ELEMENT */
export const HeaderNavigationMenuContentBodyOptionsRoot = styled(Stack)<
    HeaderNavigationMenuContentBodyOptionsRootPropsType
>`
    ${contentBodyOptionsRootStyle}
    ${getComponentOverride('HeaderNavigationMenuContentBodyOptions')};
`;

export const HeaderNavigationMenuContentBodyOptionsCategory = styled(StackItem)<
    HeaderNavigationMenuContentBodyOptionsCategoryPropsType
>`
    cursor: default;
    text-transform: uppercase;

    ${contentBodyOptionsCategoryStyle}
`;