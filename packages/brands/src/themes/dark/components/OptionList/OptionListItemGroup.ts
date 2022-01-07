import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getOptionListItemGroupOverride = () => {
    return css`
        border-top-color: ${color('neutral.08')};

        .OptionListItemGroup-Typography {
            color: ${color('neutral.05')};
        }

        &:hover {
            background: ${color('neutral.08')};

            .OptionListItemGroup-Typography {
                color: ${color('neutral.00')};
            }
        }
    `;
};
