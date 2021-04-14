import styled from 'styled-components';
import {
    HeaderNavigationMenuContentBodyOptionsRootPropsType,
    HeaderNavigationMenuContentBodyRootPropsType,
} from './type';
import { Stack } from '../../../../Stack';

const contentBodyRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContentBody },
    },
}: HeaderNavigationMenuContentBodyRootPropsType) => {
    return HeaderNavigationMenuContentBody.Root.base;
};

export const HeaderNavigationMenuContentBodyRoot = styled.div<
    HeaderNavigationMenuContentBodyRootPropsType
>`
    box-sizing: border-box;
    max-height: 400px;
    overflow-y: auto;

    ${contentBodyRootStyle}
`;

const contentBodyOptionsRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationMenuContent },
    },
}: HeaderNavigationMenuContentBodyOptionsRootPropsType) => {
    return HeaderNavigationMenuContent.BodyOptionsRoot.base;
};

export const HeaderNavigationMenuContentBodyOptionsRoot = styled(Stack)<
    HeaderNavigationMenuContentBodyOptionsRootPropsType
>`
    ${contentBodyOptionsRootStyle}
`;
