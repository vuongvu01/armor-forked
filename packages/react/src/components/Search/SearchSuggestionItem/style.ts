import styled, { css } from 'styled-components';
import {
    SearchSuggestionItemPropsType,
    SearchSuggestionItemRootPropsType,
} from './type';
import { SearchSuggestionsItem } from '../style';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { colorBlue20, colorGrey40 } from '../../../tokens';

const getSearchSuggestionItemDynamicStyle = ({
    isHighlighted,
}: SearchSuggestionItemRootPropsType) => {
    let result = {};

    if (isHighlighted) {
        result = css`
            ${result};
            .Search-SuggestionsItemIcon {
                color: ${colorBlue20};
            }

            .Search-SuggestionsItemAction {
                color: ${colorGrey40};
            }
        `;
    }

    return result;
};

export const SearchSuggestionItemRoot = styled(SearchSuggestionsItem)<
    SearchSuggestionItemPropsType
>`
    &:hover {
        .Search-SuggestionsItemIcon {
            color: ${colorBlue20};
        }

        .Search-SuggestionsItemAction {
            color: ${colorGrey40};
        }
    }

    ${getSearchSuggestionItemDynamicStyle}
    ${getComponentOverride('SearchSuggestionItem')};
`;
