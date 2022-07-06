import styled from 'styled-components';
import { propsBlocker, spacing } from '@deliveryhero/armor-system';

import { HeaderNavigationItemRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationItemRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationItemRootPropsType>`
    white-space: nowrap;
    padding: ${spacing(3, 2)};
`;
