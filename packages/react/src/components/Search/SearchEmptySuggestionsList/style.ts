import styled from 'styled-components';
import { SearchEmptySuggestionsListPropsType } from './type';
import { colorGrey00 } from '../../../tokens';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { SearchSuggestionItemContainer } from '../SearchSuggestionItem/style';
import { getPropsBlocker } from '../../../utils';

export const SearchEmptySuggestionsListRoot = styled(
    SearchSuggestionItemContainer,
).withConfig(getPropsBlocker({}, false))<SearchEmptySuggestionsListPropsType>`
    cursor: default;
    height: auto;

    &:hover {
        background-color: ${colorGrey00};
    }

    ${getComponentOverride('SearchEmptySuggestionsList')};
`;
