import styled from 'styled-components';

import { HeaderNavigationMenuContentRootPropsType } from './type';
import { getPropsBlocker } from '../../../../utils';

const headerNavigationMenuContentRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContent },
    },
}: HeaderNavigationMenuContentRootPropsType) => {
    return HeaderNavigationMenuContent.Root.base;
};

export const HeaderNavigationMenuContentRoot = styled.div.withConfig(
    getPropsBlocker(),
)<HeaderNavigationMenuContentRootPropsType>`
    min-width: 280px;
    max-width: 360px;
    cursor: default;
    outline: none;
    user-select: none;

    ${headerNavigationMenuContentRootStyle}
`;
