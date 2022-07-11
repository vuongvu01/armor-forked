import styled, {
    css,
    FlattenInterpolation,
    ThemeProps,
} from 'styled-components';
import { CancelIcon } from '@deliveryhero/armor-icons';
import {
    getComponentOverride,
    propsBlocker,
    color,
    spacing,
    transition,
} from '@deliveryhero/armor-system';

import {
    ClearIconContainerPropsType,
    SearchInputClearIconPropsType,
} from './type';

const searchInputClearIconStyle = ({
    disabled,
    searchQuery,
}: SearchInputClearIconPropsType) => {
    let result = css`` as FlattenInterpolation<ThemeProps<any>>;

    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.02')};
        `;
    } else if (!searchQuery) {
        result = css`
            ${result};
            color: ${color('neutral.00')};
            cursor: initial;
        `;
    }

    return result;
};

/** 👉 ROOT ELEMENT */
export const ClearIconRoot = styled.div.withConfig(
    propsBlocker,
)<ClearIconContainerPropsType>`
    display: flex;
    align-items: center;
    margin-right: ${spacing(3)};
`;

export const SearchInputClearIcon = styled(CancelIcon).attrs({
    small: true,
})<SearchInputClearIconPropsType>`
    cursor: pointer;
    ${transition({ all: true })};
    color: ${color('neutral.07')};
    ${searchInputClearIconStyle};
    ${getComponentOverride('SearchClearAction')};
`;
