import styled from 'styled-components';

import { HeaderNavigationItemRootPropsType } from './type';

const headerNavigationItemRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationItem },
    },
}: HeaderNavigationItemRootPropsType) => HeaderNavigationItem.Root.base;

export const HeaderNavigationItemRoot = styled.div<
    HeaderNavigationItemRootPropsType
>`
    white-space: nowrap;

    ${headerNavigationItemRootStyle}
`;
