import styled from 'styled-components';
import { HeaderNavigationLinksRootPropsType } from './type';
import { Pack } from '../../Pack';
import { HeaderNavigationPackItem } from '../HeaderNavigationPackItem';

const packItemLinksStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationLinks },
    },
}: HeaderNavigationLinksRootPropsType) => {
    return HeaderNavigationLinks.NavigationPackItem.base;
};

export const NavigationPackItemLinks = styled(HeaderNavigationPackItem)<
    HeaderNavigationLinksRootPropsType
>`
    padding-top: 0;
    padding-bottom: 0;

    ${packItemLinksStyle}
`;

const navigationLinksRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationLinks },
    },
}: HeaderNavigationLinksRootPropsType) => {
    return HeaderNavigationLinks.Root.base;
};

export const HeaderNavigationLinksRoot = styled(Pack)<
    HeaderNavigationLinksRootPropsType
>`
    ${navigationLinksRootStyle}
`;
