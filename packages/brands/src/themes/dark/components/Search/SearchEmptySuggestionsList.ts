import { css } from 'styled-components';
import { colorGrey30, colorGrey70 } from '@deliveryhero/armor-system';

export const getSearchEmptySuggestionsListOverride = () => css`
    background-color: ${colorGrey70};

    &:hover {
        background-color: ${colorGrey70};
    }

    .SearchEmptySuggestionsList-LabelTypography {
        color: ${colorGrey30};
    }
`;
