import styled from 'styled-components';
import {
    propsBlocker,
    getComponentOverride,
    spacing,
} from '@deliveryhero/armor-system';

import { HeaderNavigationItemRootPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const HeaderNavigationItemRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationItemRootPropsType>`
    white-space: nowrap;
    padding: ${spacing(3)} ${spacing(2)};
    ${getComponentOverride('HeaderNavigationItem')};
`;
