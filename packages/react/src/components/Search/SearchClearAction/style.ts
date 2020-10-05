import styled, { css } from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';

import {
    ClearIconContainerPropsType,
    SearchInputClearIconPropsType,
} from './type';
import { transitionDurationInSec } from '../../../constants';

const clearIconContainerStyle = ({
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
        transition: all ${transitionDurationInSec}s ease;
        ${SearchClearAction.ClearIcon.base}
    `;

    if (disabled) {
        result = css`
            ${result};
            ${SearchClearAction.ClearIcon.disabled}
        `;
    } else if (!searchQuery) {
        result = css`
            ${result};
            ${SearchClearAction.ClearIcon.transparent}
        `;
    }

    return result;
};

export const ClearIconContainer = styled.div<ClearIconContainerPropsType>`
    ${clearIconContainerStyle}
`;

export const SearchInputClearIcon = styled(CancelIcon)<
    SearchInputClearIconPropsType
>`
    ${searchInputClearIconStyle}
`;
