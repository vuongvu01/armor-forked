import styled from 'styled-components';
import { SearchIcon, UploadIcon } from '@deliveryhero/armor-icons';
import { propsBlocker, color, spacing } from '@deliveryhero/armor-system';

import { SearchIconContainerPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const SearchIconRoot = styled.div.withConfig(
    propsBlocker,
)<SearchIconContainerPropsType>`
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    margin-left: ${spacing(3)};
`;

export const SearchInputLoadingIcon = styled(UploadIcon).attrs({ small: true })`
    color: ${color('neutral.07')};
`;

export const SearchInputSearchIcon = styled(SearchIcon).attrs({
    small: true,
})`
    color: ${color('neutral.07')};
`;
