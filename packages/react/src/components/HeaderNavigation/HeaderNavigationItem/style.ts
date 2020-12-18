import styled from 'styled-components';

import { HeaderNavigationItemRootPropsType } from './type';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

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
    ${getComponentOverride('HeaderNavigationItem')};
`;
