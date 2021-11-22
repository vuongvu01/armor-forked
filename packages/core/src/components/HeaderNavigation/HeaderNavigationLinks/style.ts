import styled from 'styled-components';
import { propsBlocker } from '@deliveryhero/armor-system';

import { HeaderNavigationLinksRootPropsType } from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

const itemLinksStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationLinks },
    },
}: HeaderNavigationLinksRootPropsType) => {
    return HeaderNavigationLinks.NavigationItem.base;
};

/** 👉 ROOT ELEMENT */
export const HeaderNavigationLinksRoot = styled(HeaderNavigationItem)<
    HeaderNavigationLinksRootPropsType
>`
    padding-top: 0;
    padding-bottom: 0;

    ${itemLinksStyle};
`;

export const HeaderNavigationLinksContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationLinksRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
