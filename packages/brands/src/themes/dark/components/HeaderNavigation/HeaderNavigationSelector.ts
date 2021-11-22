import { css } from 'styled-components';
import { colorGrey70, colorGrey90 } from '@deliveryhero/armor-system';

export const getHeaderNavigationSelectorOverride = () => css`
    border-right-color: ${colorGrey70};

    .TextInput-Input {
        background-color: ${colorGrey90};
    }
`;
