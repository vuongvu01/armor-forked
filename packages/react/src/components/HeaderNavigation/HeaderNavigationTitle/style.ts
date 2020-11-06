import styled from 'styled-components';
import { HeaderNavigationTitleRootPropsType } from './type';
import { HeaderNavigationLink } from '../HeaderNavigationLinks/HeaderNavigationLink';
import { fontSize03, fontWeightMedium } from '../../../tokens';

const navigationLinkRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationTitle },
    },
}: HeaderNavigationTitleRootPropsType) => HeaderNavigationTitle.Root.base;

export const HeaderNavigationTitleRoot = styled(HeaderNavigationLink)<
    HeaderNavigationTitleRootPropsType
>`
    cursor: pointer;
    text-decoration: none;
    padding: 0;
    font-weight: ${fontWeightMedium};

    ${navigationLinkRootStyle}
`;
