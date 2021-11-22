import styled from 'styled-components';
import { propsBlocker, getComponentOverride } from '@deliveryhero/armor-system';

import { HeaderNavigationItemRootPropsType } from './type';

const headerNavigationItemRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationItem },
    },
}: HeaderNavigationItemRootPropsType) => HeaderNavigationItem.Root.base;

/** 👉 ROOT ELEMENT */
export const HeaderNavigationItemRoot = styled.div.withConfig(propsBlocker)<
    HeaderNavigationItemRootPropsType
>`
    white-space: nowrap;

    ${headerNavigationItemRootStyle}
    ${getComponentOverride('HeaderNavigationItem')};
`;
