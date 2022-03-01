import styled from 'styled-components';
import {
    propsBlocker,
    spacing,
    token,
    typography,
} from '@deliveryhero/armor-system';

import { HeaderNavigationLinksRootPropsType } from './type';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationLinksRoot = styled(
    HeaderNavigationItem,
)<HeaderNavigationLinksRootPropsType>`
    padding-top: 0;
    padding-bottom: 0;
    padding-left: ${spacing(6)};
    ${typography('paragraphMedium')};
    color: ${token('body.color')};
`;

export const HeaderNavigationLinksContainer = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationLinksRootPropsType>`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
