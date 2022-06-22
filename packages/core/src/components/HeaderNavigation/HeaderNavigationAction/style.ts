import styled from 'styled-components';
import {
    color,
    getComponentOverride,
    propsBlocker,
    spacing,
    token,
} from '@deliveryhero/armor-system';

import {
    HeaderNavigationActionContainerPropsType,
    HeaderNavigationActionItemRootPropsType,
    HeaderNavigationActionRootPropsType,
} from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationActionRoot = styled(
    HeaderNavigationItem,
)<HeaderNavigationActionRootPropsType>`
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 ${spacing(2)};
`;

export const HeaderNavigationActionContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationActionContainerPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

export const HeaderNavigationActionItemRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationActionItemRootPropsType>`
    cursor: pointer;
    padding: ${spacing(2, 2, 0, 2)};
    margin-right: ${spacing(2)};
    margin-left: ${spacing(2)};
    &:hover {
        background: ${color('primary.lightest')};
        border-radius: ${token('shape.borderRadius.soft')};
    }
    ${getComponentOverride('HeaderNavigationActionItem')};
`;
