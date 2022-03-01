import styled from 'styled-components';
import { SearchIcon, UploadIcon } from '@deliveryhero/armor-icons';
import { propsBlocker, color, spacing } from '@deliveryhero/armor-system';

import {
    SearchIconContainerPropsType,
    SearchInputLoadingIconPropsType,
    SearchInputSearchIconPropsType,
} from './type';

/** 👉 ROOT ELEMENT */
export const SearchIconRoot = styled.div.withConfig(
    propsBlocker,
)<SearchIconContainerPropsType>`
    display: flex;
    align-items: center;
    padding-left: ${spacing(3.5)};
`;

export const SearchInputLoadingIcon = styled(
    UploadIcon,
)<SearchInputLoadingIconPropsType>`
    color: ${color('neutral.07')};
    width: ${spacing(4)};
    height: ${spacing(4)};
`;

export const SearchInputSearchIcon = styled(
    SearchIcon,
)<SearchInputSearchIconPropsType>`
    color: ${color('neutral.07')};
    width: ${spacing(4)};
    height: ${spacing(4)};
`;
