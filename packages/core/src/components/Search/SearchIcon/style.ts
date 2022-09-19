import styled, { css } from 'styled-components';
import { SearchIcon } from '@deliveryhero/armor-icons';
import { propsBlocker, color, spacing } from '@deliveryhero/armor-system';

import {
    SearchIconContainerPropsType,
    SearchInputSearchIconPropsType,
} from './type';

/** 👉 ROOT ELEMENT */
export const SearchIconRoot = styled.div.withConfig(
    propsBlocker,
)<SearchIconContainerPropsType>`
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    margin-left: ${spacing(3)};
`;

export const SearchInputSearchIcon = styled(SearchIcon).attrs({
    small: true,
})<SearchInputSearchIconPropsType>(
    ({ disabled }) => css`
        color: ${disabled ? color('neutral.05') : color('neutral.11')};
    `,
);
