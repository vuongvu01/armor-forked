import styled, { css } from 'styled-components';
import {
    color,
    spacing,
    getComponentOverride,
} from '@deliveryhero/armor-system';

import { HeaderNavigationSearchRootPropsType } from './type';
import { Search } from '../../Search';
import { HeaderNavigationItem } from '../HeaderNavigationItem';

const packItemSearchStyle = ({
    separator,
}: HeaderNavigationSearchRootPropsType) => {
    let result = css`
        border-right-color: ${color('neutral.03')};
    `;

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
export const NavigationItemSearch = styled(
    HeaderNavigationItem,
)<HeaderNavigationSearchRootPropsType>`
    padding-top: 0;
    padding-bottom: 0;
    height: 48px;
    border-right-width: 1px;
    border-right-style: solid;
    padding-right: ${spacing(4)};
    padding-left: ${spacing(4)};

    ${packItemSearchStyle}
    ${getComponentOverride('HeaderNavigationSearch')};
`;

// TODO (nmelnikov 2020-10-14): update this logic once this PR lands:
// https://github.com/deliveryhero/armor/pull/270
/** 👉 ROOT ELEMENT */
export const HeaderNavigationSearchRoot = styled(
    Search,
)<HeaderNavigationSearchRootPropsType>`
    .TextInput-Root {
        margin-top: 4px;
        height: 40px;
    }

    .TextInput-Input {
        height: 38px;
    }
`;
