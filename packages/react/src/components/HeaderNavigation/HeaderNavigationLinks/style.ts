import styled from 'styled-components';
import { HeaderNavigationLinksRootPropsType } from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';
import { getPropsBlocker } from '../../../utils';

const itemLinksStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationLinks },
    },
}: HeaderNavigationLinksRootPropsType) => {
    return HeaderNavigationLinks.NavigationItem.base;
};

export const HeaderNavigationLinksRoot = styled(
    HeaderNavigationItem,
).withConfig(getPropsBlocker({}, false))<HeaderNavigationLinksRootPropsType>`
    padding-top: 0;
    padding-bottom: 0;

    ${itemLinksStyle}
`;

export const HeaderNavigationLinksContainer = styled.div.withConfig(
    getPropsBlocker(),
)<HeaderNavigationLinksRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
