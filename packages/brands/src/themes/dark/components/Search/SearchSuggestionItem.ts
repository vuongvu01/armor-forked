import { css } from 'styled-components';
import {
    colorGrey01,
    colorGrey10,
    colorGrey30,
    colorGrey60,
    colorGrey70,
} from '@deliveryhero/armor-system';

type SearchSuggestionItemPropsType = {
    isHighlighted?: boolean;
};

export const getSearchSuggestionItemOverride = ({
    isHighlighted,
}: SearchSuggestionItemPropsType) => {
    let result = css`
        background-color: ${colorGrey70};

        .Search-SuggestionsItemIcon {
            color: ${colorGrey10};
        }

        .Search-LabelTypography {
            color: ${colorGrey10};
        }

        .Search-SuggestionsItemAction {
            color: ${colorGrey30};
        }

        &:hover {
            background-color: ${colorGrey60};

            .Search-SuggestionsItemIcon {
                color: ${colorGrey01};
            }

            .Search-LabelTypography {
                color: ${colorGrey01};
            }

            .Search-SuggestionsItemAction {
                color: ${colorGrey30};
            }
        }
    `;

    if (isHighlighted) {
        result = css`
            ${result};
            background-color: ${colorGrey60};

            .Search-SuggestionsItemAction {
                color: ${colorGrey30};
            }
        `;
    }

    return result;
};
