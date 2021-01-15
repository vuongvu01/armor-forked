import styled from 'styled-components';

import { HeaderNavigationItemRootPropsType } from './type';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { getPropsBlocker } from '../../../utils';

const headerNavigationItemRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationItem },
    },
}: HeaderNavigationItemRootPropsType) => HeaderNavigationItem.Root.base;

export const HeaderNavigationItemRoot = styled.div.withConfig(
    getPropsBlocker(),
)<HeaderNavigationItemRootPropsType>`
    white-space: nowrap;

    ${headerNavigationItemRootStyle}
    ${getComponentOverride('HeaderNavigationItem')};
`;
