import styled, { css } from 'styled-components';

import { HeaderNavigationSearchRootPropsType } from './type';
import { Search } from '../../Search';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

const packItemSearchStyle = ({
    separator,
    theme: {
        componentOverrides: { HeaderNavigationSearch },
    },
}: HeaderNavigationSearchRootPropsType) => {
    let result = HeaderNavigationSearch.NavigationItem.base;

    if (!separator) {
        result = css`
            ${result};
            border-right: none;
        `;
    }

    return result;
};

// TODO (nmelnikov 2020-10-14): update this logic once this PR lands:
// https://github.com/deliveryhero/armor/pull/270
export const NavigationItemSearch = styled(HeaderNavigationItem)<
    HeaderNavigationSearchRootPropsType
>`
    padding-top: 0;
    padding-bottom: 0;
    height: 48px;
    border-right-width: 1px;
    border-right-style: solid;

    ${packItemSearchStyle}
`;

const navigationSearchRootStyle = ({
    theme: {
        componentOverrides: { HeaderNavigationSearch },
    },
}: HeaderNavigationSearchRootPropsType) => {
    return HeaderNavigationSearch.Root.base;
};

// TODO (nmelnikov 2020-10-14): update this logic once this PR lands:
// https://github.com/deliveryhero/armor/pull/270
export const HeaderNavigationSearchRoot = styled(Search)<
    HeaderNavigationSearchRootPropsType
>`
    .TextInput-Root {
        margin-top: 4px;
        height: 40px;
    }

    .TextInput-Input {
        height: 38px;
    }

    ${navigationSearchRootStyle}
`;
