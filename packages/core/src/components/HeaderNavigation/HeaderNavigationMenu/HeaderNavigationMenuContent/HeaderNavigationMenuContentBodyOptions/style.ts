import styled, { css } from 'styled-components';
import {
    color,
    getComponentOverride,
    spacing,
    token,
    typography,
} from '@deliveryhero/armor-system';

import { HeaderNavigationMenuContentBodyOptionsRootPropsType } from '../HeaderNavigationMenuContentBody/type';
import {
    HeaderNavigationMenuContentBodyOptionsCategoryPropsType,
    HeaderNavigationMenuContentBodyOptionsItemPropsType,
} from '../type';
import { Stack, StackItem } from '../../../../Stack';

const getContentBodyOptionsItemStyle = ({
    isActive,
}: HeaderNavigationMenuContentBodyOptionsItemPropsType) => {
    if (isActive) {
        return css`
            border-left-width: 2px;
            border-left-style: solid;
            padding-left: 14px;
            border-left-color: ${color('primary.main')};
            background-color: ${color('primary.lightest')};
            color: ${color('neutral.11')};
        `;
    }

    return '';
};

export const HeaderNavigationMenuContentBodyOptionsItem = styled(
    StackItem,
)<HeaderNavigationMenuContentBodyOptionsItemPropsType>`
    cursor: pointer;
    box-sizing: border-box;
    ${typography('paragraphMedium')};
    color: ${color('neutral.07')};
    padding: ${spacing(2)} ${spacing(4)};
    &:hover {
        border-left-color: ${color('primary.main')};
        background-color: ${color('primary.lightest')};
    }
    ${getContentBodyOptionsItemStyle};
`;

/** 👉 ROOT ELEMENT */
export const HeaderNavigationMenuContentBodyOptionsRoot = styled(
    Stack,
)<HeaderNavigationMenuContentBodyOptionsRootPropsType>`
    padding-top: ${spacing(6)};
    padding-bottom: ${spacing(6)};
    ${getComponentOverride('HeaderNavigationMenuContentBodyOptions')};
`;

export const HeaderNavigationMenuContentBodyOptionsCategory = styled(
    StackItem,
)<HeaderNavigationMenuContentBodyOptionsCategoryPropsType>`
    cursor: default;
    text-transform: uppercase;
    ${typography('labelSmall')};
    color: ${token('body.color')};
    padding: ${spacing(2)} ${spacing(4)};
`;
