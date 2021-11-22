import { css } from 'styled-components';
import { colorGrey70 } from '@deliveryhero/armor-system';
import { SearchPropsType } from '@deliveryhero/armor';

export const getSearchOverride = ({ disabled }: SearchPropsType) => {
    let result = css`
        .Search-SuggestionsContainer {
            background-color: ${colorGrey70};
        }
    `;

    if (disabled) {
        result = css`
            ${result};
            .Search-TextInput.Search-TextInput--disabled {
                background-color: ${colorGrey70};

                &:hover {
                    background-color: ${colorGrey70};
                }
            }
        `;
    }

    return result;
};
