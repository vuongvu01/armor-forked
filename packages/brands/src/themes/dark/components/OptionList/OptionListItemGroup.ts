import { css } from 'styled-components';
import {
    colorGrey60,
    colorGrey30,
    colorGrey00,
} from '@deliveryhero/armor-system';

export const getOptionListItemGroupOverride = () => {
    return css`
        border-top-color: ${colorGrey60};

        .OptionListItemGroup-Typography {
            color: ${colorGrey30};
        }

        &:hover {
            background: ${colorGrey60};

            .OptionListItemGroup-Typography {
                color: ${colorGrey00};
            }
        }
    `;
};
