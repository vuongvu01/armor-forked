import styled from 'styled-components';
import { SearchEmptySuggestionsListPropsType } from './type';
import { colorGrey00 } from '../../../tokens';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { SearchSuggestionItemContainer } from '../SearchSuggestionItem/style';

export const SearchEmptySuggestionsListRoot = styled(
    SearchSuggestionItemContainer,
)<SearchEmptySuggestionsListPropsType>`
    cursor: default;

    &:hover {
        background-color: ${colorGrey00};
    }

    ${getComponentOverride('SearchEmptySuggestionsList')};
`;
