import styled from 'styled-components';

import { HeaderNavigationItemRootPropsType } from './type';
import { propsBlocker, getComponentOverride } from '../../../system';

const headerNavigationItemRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationItem },
    },
}: HeaderNavigationItemRootPropsType) => HeaderNavigationItem.Root.base;

export const HeaderNavigationItemRoot = styled.div.withConfig(propsBlocker)<
    HeaderNavigationItemRootPropsType
>`
    white-space: nowrap;

    ${headerNavigationItemRootStyle}
    ${getComponentOverride('HeaderNavigationItem')};
`;
