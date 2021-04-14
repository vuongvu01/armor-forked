import styled from 'styled-components';

import { HeaderNavigationMenuContentRootPropsType } from './type';
import { propsBlocker } from '../../../../system';

const headerNavigationMenuContentRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContent },
    },
}: HeaderNavigationMenuContentRootPropsType) => {
    return HeaderNavigationMenuContent.Root.base;
};

export const HeaderNavigationMenuContentRoot = styled.div.withConfig(
    propsBlocker,
)<HeaderNavigationMenuContentRootPropsType>`
    min-width: 280px;
    max-width: 360px;
    cursor: default;
    outline: none;
    user-select: none;

    ${headerNavigationMenuContentRootStyle}
`;
