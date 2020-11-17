import styled from 'styled-components';
import { SearchIcon, UploadIcon } from '@deliveryhero/armor-icons';
import {
    SearchIconContainerPropsType,
    SearchInputLoadingIconPropsType,
    SearchInputSearchIconPropsType,
} from './type';

const searchIconContainerStyle = ({
    theme: {
        componentOverrides: { SearchIcon: SearchIconTheme },
    },
}: SearchIconContainerPropsType) => {
    return SearchIconTheme.SearchIconContainer.base;
};

export const SearchIconContainer = styled.div<SearchIconContainerPropsType>`
    display: flex;
    align-items: center;
    ${searchIconContainerStyle};
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
