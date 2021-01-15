import styled from 'styled-components';
import { SearchIcon, UploadIcon } from '@deliveryhero/armor-icons';
import {
    SearchIconContainerPropsType,
    SearchInputLoadingIconPropsType,
    SearchInputSearchIconPropsType,
} from './type';
import { getPropsBlocker } from '../../../utils';

const searchIconContainerStyle = ({
    theme: {
        componentOverrides: { SearchIcon: SearchIconTheme },
    },
}: SearchIconContainerPropsType) => {
    return SearchIconTheme.SearchIconContainer.base;
};

export const SearchIconContainer = styled.div.withConfig(getPropsBlocker())<
    SearchIconContainerPropsType
>`
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

export const SearchInputLoadingIcon = styled(UploadIcon).withConfig(
    getPropsBlocker({}, false),
)<SearchInputLoadingIconPropsType>`
    ${loadingIconIconStyle}
`;

const searchIconStyle = ({
    theme: {
        componentOverrides: { SearchIcon: SearchIconTheme },
    },
}: SearchInputSearchIconPropsType) => {
    return SearchIconTheme.SearchIcon.base;
};

export const SearchInputSearchIcon = styled(SearchIcon).withConfig(
    getPropsBlocker({}, false),
)<SearchInputSearchIconPropsType>`
    ${searchIconStyle}
`;
