import { css } from 'styled-components';
import { colorGrey50, colorGrey80 } from '../../../../../tokens';
import { SearchInputClearIconPropsType } from '../../../../../components/Search/SearchClearAction/type';

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
