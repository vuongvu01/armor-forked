import styled from 'styled-components';
import {
    HeaderNavigationMenuContentBodyOptionsRootPropsType,
    HeaderNavigationMenuContentBodyRootPropsType,
} from './type';
import { Stack } from '../../../../Stack';

export const HeaderNavigationMenuContentBodyRoot = styled.div<HeaderNavigationMenuContentBodyRootPropsType>`
    box-sizing: border-box;
    max-height: 400px;
    overflow-y: auto;
`;

/** 👉 ROOT ELEMENT */
export const HeaderNavigationMenuContentBodyOptionsRoot = styled(
    Stack,
)<HeaderNavigationMenuContentBodyOptionsRootPropsType>``;
