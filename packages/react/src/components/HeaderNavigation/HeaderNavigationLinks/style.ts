import styled from 'styled-components';
import { HeaderNavigationLinksRootPropsType } from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

const itemLinksStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationLinks },
    },
}: HeaderNavigationLinksRootPropsType) => {
    return HeaderNavigationLinks.NavigationItem.base;
};

export const HeaderNavigationLinksRoot = styled(HeaderNavigationItem)<
    HeaderNavigationLinksRootPropsType
>`
    padding-top: 0;
    padding-bottom: 0;

    ${itemLinksStyle}
`;

const navigationLinksRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationLinks },
    },
}: HeaderNavigationLinksRootPropsType) => {
    return HeaderNavigationLinks.Root.base;
};

export const HeaderNavigationLinksContainer = styled.div<
    HeaderNavigationLinksRootPropsType
>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    ${navigationLinksRootStyle}
`;
