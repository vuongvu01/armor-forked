import styled from 'styled-components';
import { SearchIcon, UploadIcon } from '@deliveryhero/armor-icons';
import {
    SearchIconContainerPropsType,
    SearchInputLoadingIconPropsType,
    SearchInputSearchIconPropsType,
} from './type';
import { propsBlocker } from '../../../system';

const searchIconRootStyle = ({
    theme: {
        componentOverrides: { SearchIcon: SearchIconTheme },
    },
}: SearchIconContainerPropsType) => {
    return SearchIconTheme.SearchIconContainer.base;
};

/** 👉 ROOT ELEMENT */
export const SearchIconRoot = styled.div.withConfig(propsBlocker)<
    SearchIconContainerPropsType
>`
    display: flex;
    align-items: center;
    ${searchIconRootStyle};
`;

const loadingIconIconStyle = ({
    theme: {
        componentOverrides: { SearchIcon: SearchIconTheme },
    },
}: SearchInputLoadingIconPropsType) => {
    return SearchIconTheme.LoadingIcon.base;
};

export const SearchInputLoadingIcon = styled(UploadIcon)<
    SearchInputLoadingIconPropsType
>`
    ${loadingIconIconStyle}
`;

const searchIconStyle = ({
    theme: {
        componentOverrides: { SearchIcon: SearchIconTheme },
    },
}: SearchInputSearchIconPropsType) => {
    return SearchIconTheme.SearchIcon.base;
};

export const SearchInputSearchIcon = styled(SearchIcon)<
    SearchInputSearchIconPropsType
>`
    ${searchIconStyle}
`;
