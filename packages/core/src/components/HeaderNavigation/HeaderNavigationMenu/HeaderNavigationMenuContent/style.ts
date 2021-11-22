import styled from 'styled-components';
import { propsBlocker } from '@deliveryhero/armor-system';

import { HeaderNavigationMenuContentRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationMenuContentRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuContentRootPropsType>`
    min-width: 280px;
    max-width: 360px;
    cursor: default;
    outline: none;
    user-select: none;
`;
