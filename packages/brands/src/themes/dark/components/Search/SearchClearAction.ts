import { css } from 'styled-components';
import { colorGrey50, colorGrey80 } from '@deliveryhero/armor-system';
import { SearchPropsType } from '@deliveryhero/armor';

type SearchInputClearIconPropsType = SearchPropsType &
    Partial<{
        searchQuery: string | readonly string[];
    }>;

export const getSearchClearActionOverride = ({
    disabled,
    searchQuery,
}: SearchInputClearIconPropsType) => {
    let result = css`
        color: ${colorGrey50};
    `;

    if (disabled) {
        result = css`
            ${result};
            color: ${colorGrey80};
        `;
    } else if (!searchQuery) {
        result = css`
            ${result};
            color: ${colorGrey80};
        `;
    }

    return result;
};
