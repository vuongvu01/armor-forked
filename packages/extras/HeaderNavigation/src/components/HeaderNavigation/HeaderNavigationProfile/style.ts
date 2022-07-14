import styled, { css } from 'styled-components';
import {
    color,
    propsBlocker,
    spacing,
    typography,
} from '@deliveryhero/armor-system';

import { Link, Stack, StackItem } from '@deliveryhero/armor';
import {
    HeaderNavigationProfileMenuItemRootPropsType,
    HeaderNavigationProfileRootPropsType,
    HeaderNavigationProfileMenuItemPropsType,
    HeaderNavigationProfileButtonRootPropsType,
    HeaderNavigationProfileButtonTextPropsType,
} from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationProfileRoot = styled(
    HeaderNavigationItem,
)<HeaderNavigationProfileRootPropsType>`
    display: flex;
    align-items: center;
    height: ${spacing(12)};
    padding: ${spacing(0, 4)};
`;

export const HeaderNavigationProfileWrapper = styled(Stack)``;

export const HeaderNavigationProfileButtonRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationProfileButtonRootPropsType>`
    background-color: ${color('neutral.00')};
    border-radius: 50%;
    border-color: ${color('neutral.03')};
    border-width: 1px;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${spacing(9)};
    height: ${spacing(9)};
    ${({ open }) =>
        open &&
        css`
            background-color: ${color('neutral.02')};
        `}
    &:hover {
        background-color: ${color('primary.01')};
        border-color: transparent;
    }
    &:active {
        background-color: ${color('neutral.02')};
    }
    cursor: pointer;
`;

export const HeaderNavigationProfileButtonText = styled.span.withConfig(
    propsBlocker,
)<HeaderNavigationProfileButtonTextPropsType>`
    ${typography('paragraphMedium')}
    color: ${color('primary.07')};
`;

export const HeaderNavigationProfileMenuItemRoot = styled(
    StackItem,
)<HeaderNavigationProfileMenuItemRootPropsType>`
    cursor: pointer;
    padding: ${spacing(4, 0)};
    color: ${color('neutral.11')};
    ${typography('paragraphMedium')}
`;

export const HeaderNavigationProfileMenuRoot = styled(
    Stack,
)<HeaderNavigationProfileMenuItemPropsType>`
    padding: ${spacing(2, 4)};
    min-width: ${spacing(75)};
`;
export const HeaderNavigationProfileMenuItemLabel = styled(Link)`
    color: inherit;
    ${typography('paragraphMedium')}

    &:hover {
        color: inherit;
    }
`;
