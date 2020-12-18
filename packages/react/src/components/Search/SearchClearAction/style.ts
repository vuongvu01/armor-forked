import styled, { css } from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';

import {
    ClearIconContainerPropsType,
    SearchInputClearIconPropsType,
} from './type';
import { transitionDurationInSec } from '../../../constants';
import { makePropList, shouldForwardProp } from '../../../utils';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

const clearIconPropertyList = makePropList(['searchQuery']);

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
        cursor: pointer;
        transition: all ${transitionDurationInSec}s ease;
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

export const ClearIconContainer = styled.div<ClearIconContainerPropsType>`
    display: flex;
    align-items: center;
    ${clearIconContainerStyle};
`;

export const SearchInputClearIcon = styled(CancelIcon).withConfig({
    shouldForwardProp: property =>
        shouldForwardProp(property, clearIconPropertyList),
})<SearchInputClearIconPropsType>`
    ${searchInputClearIconStyle}
    ${getComponentOverride('SearchClearAction')};
`;
