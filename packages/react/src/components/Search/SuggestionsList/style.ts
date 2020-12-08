import styled, { css } from 'styled-components';
import { color, pixelToRem, spacing, typography } from '../../../system/mixins';
import { SearchSuggestionListGroupPropsType } from './type';

const getSearchSuggestionListGroupDynamicStyle = ({
    enableSeparator,
}: SearchSuggestionListGroupPropsType) => {
    let result = {};

    if (enableSeparator) {
        result = css`
            border-top: 1px solid ${color('neutral.03')};
            margin-top: ${spacing(6)};
        `;
    }

    return result;
};

export const SearchSuggestionListGroup = styled.div<
    SearchSuggestionListGroupPropsType
>`
    padding: ${spacing(6)} 0 ${spacing(2)} 0;
    margin: 0 ${spacing(4)};
    ${typography('labelMedium')};
    font-size: ${pixelToRem(14)};
    color: ${color('neutral.05')};
    ${getSearchSuggestionListGroupDynamicStyle};
`;
