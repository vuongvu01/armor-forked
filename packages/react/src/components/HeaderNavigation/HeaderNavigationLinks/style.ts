import styled from 'styled-components';
import { HeaderNavigationLinksRootPropsType } from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';
import { propsBlocker } from '../../../system';

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

export const HeaderNavigationLinksContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationLinksRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
