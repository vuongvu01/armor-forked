import { css } from 'styled-components';
import { colorGrey30, colorGrey70 } from '../../../../../tokens';
import { SearchRootPropsType } from '../../../../../components/Search/type';

export const getSearchOverride = ({ disabled }: SearchRootPropsType) => {
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
