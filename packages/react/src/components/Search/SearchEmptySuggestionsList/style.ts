import styled from 'styled-components';
import { SearchEmptySuggestionsListPropsType } from './type';
import { colorGrey00 } from '../../../tokens';
import { getComponentOverride } from '../../../system/mixins/getComponentOverride';
import { getPropsBlocker } from '../../../utils';
import { spacing } from '../../../system/mixins';

export const SearchEmptySuggestionsListRoot = styled.div.withConfig(
    getPropsBlocker({}, false),
)<SearchEmptySuggestionsListPropsType>`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    padding-bottom: ${spacing(2)};
    padding-left: ${spacing(4)};
    padding-right: ${spacing(4)};
    padding-top: ${spacing(2)};
    cursor: default;
    height: auto;

    &:hover {
        background-color: ${colorGrey00};
    }

    ${getComponentOverride('SearchEmptySuggestionsList')};
`;
