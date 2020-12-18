import styled from 'styled-components';
import { SearchEmptySuggestionsListPropsType } from './type';
import { SearchSuggestionsItem } from '../style';
import { colorGrey00 } from '../../../tokens';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';

export const SearchEmptySuggestionsListRoot = styled(SearchSuggestionsItem)<
    SearchEmptySuggestionsListPropsType
>`
    cursor: default;

    &:hover {
        background-color: ${colorGrey00};
    }

    ${getComponentOverride('SearchEmptySuggestionsList')};
`;
