import styled, { css } from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';
import {
    getComponentOverride,
    propsBlocker,
    durationNormal,
} from '@deliveryhero/armor-system';

import {
    ClearIconContainerPropsType,
    SearchInputClearIconPropsType,
} from './type';

const clearIconRootStyle = ({
    theme: {
        componentOverrides: { SearchClearAction },
    },
}: ClearIconContainerPropsType) => {
    return SearchClearAction.ClearIconContainer.base;
};

const searchInputClearIconStyle = ({
    disabled,
    searchQuery,
    theme: {
        componentOverrides: { SearchClearAction },
    },
}: SearchInputClearIconPropsType) => {
    let result = css`
        cursor: pointer;
        transition: all ${durationNormal}ms ease;
        ${SearchClearAction.ClearIcon.base};
    `;

    if (disabled) {
        result = css`
            ${result};
            ${SearchClearAction.ClearIcon.disabled}
        `;
    } else if (!searchQuery) {
        result = css`
            ${result};
            ${SearchClearAction.ClearIcon.transparent};
            cursor: initial;
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const ClearIconRoot = styled.div.withConfig(propsBlocker)<
    ClearIconContainerPropsType
>`
    display: flex;
    align-items: center;
    ${clearIconRootStyle};
`;

export const SearchInputClearIcon = styled(CancelIcon)<
    SearchInputClearIconPropsType
>`
    ${searchInputClearIconStyle};
    ${getComponentOverride('SearchClearAction')};
`;
