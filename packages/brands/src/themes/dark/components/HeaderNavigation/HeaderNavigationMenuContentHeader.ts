import { css } from 'styled-components';
import { colorGrey30, colorGrey60 } from '@deliveryhero/armor-system';

export const getHeaderNavigationMenuContentHeaderOverride = () => css`
    background-color: ${colorGrey60};

    .HeaderNavigationMenuContentHeader-Title {
        color: ${colorGrey30};
    }
`;
