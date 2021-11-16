import styled from 'styled-components';
import { getComponentOverride, propsBlocker } from '@deliveryhero/armor-system';

import {
    HeaderNavigationActionContainerPropsType,
    HeaderNavigationActionItemRootPropsType,
    HeaderNavigationActionRootPropsType,
} from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

const actionRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationAction },
    },
}: HeaderNavigationActionRootPropsType) => {
    return HeaderNavigationAction.Root.base;
};

/** 👉 ROOT ELEMENT */
export const HeaderNavigationActionRoot = styled(HeaderNavigationItem)<
    HeaderNavigationActionRootPropsType
>`
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    height: 48px;

    ${actionRootStyle};
`;

export const HeaderNavigationActionContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationActionContainerPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const actionItemRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationAction },
    },
}: HeaderNavigationActionItemRootPropsType) => {
    return HeaderNavigationAction.Item.base;
};

export const HeaderNavigationActionItemRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationActionItemRootPropsType>`
    cursor: pointer;

    ${actionItemRootStyle}
    ${getComponentOverride('HeaderNavigationActionItem')};
`;
