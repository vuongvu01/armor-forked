import styled, { css } from 'styled-components';
import { color, pixelToRem, spacing, typography } from '../../../system/mixins';
import { SearchSuggestionListGroupPropsType } from './type';
import { getPropsBlocker } from '../../../utils';

const propertyList = {
    enableSeparator: true,
};

const getSearchSuggestionListGroupDynamicStyle = ({
    enableSeparator,
}: SearchSuggestionListGroupPropsType) => {
    let result = {};

    if (enableSeparator) {
        result = css`
            border-top: 1px solid ${color('neutral.02')};
            padding-top: ${spacing(10)};
        `;
    }

    return result;
};

export const SearchSuggestionListGroup = styled.div.withConfig(
    getPropsBlocker(propertyList),
)<SearchSuggestionListGroupPropsType>`
    padding: ${spacing(6)} ${spacing(4)} ${spacing(2)} ${spacing(4)};
    ${typography('labelMedium')};
    font-size: ${pixelToRem(14)};
    color: ${color('neutral.05')};
    ${getSearchSuggestionListGroupDynamicStyle};
`;
