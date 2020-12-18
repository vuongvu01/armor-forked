import { css } from 'styled-components';
import {
    colorBlue20,
    colorGrey01,
    colorGrey30,
    colorGrey50,
    colorGrey60,
    colorGrey70,
} from '../../../../../tokens';

export const getSearchSuggestionItemOverride = ({
    isHighlighted,
}: {
    isHighlighted?: boolean;
}) => {
    let result = css`
        background-color: ${colorGrey70};

        &:hover {
            background-color: ${colorGrey60};

            .Search-SuggestionsItemIcon {
                color: ${colorBlue20};
            }

            .Search-SuggestionsItemAction {
                color: ${colorGrey30};
            }
        }

        .Search-LabelTypography {
            color: ${colorGrey01};
        }

        .Search-SuggestionsItemIcon {
            color: ${colorGrey50};
        }

        .Search-SuggestionsItemAction {
            color: ${colorGrey50};
        }
    `;

    if (isHighlighted) {
        result = css`
            ${result};
            background-color: ${colorGrey60};

            .Search-SuggestionsItemIcon {
                color: ${colorBlue20};
            }

            .Search-SuggestionsItemAction {
                color: ${colorGrey30};
            }
        `;
    }

    return result;
};
