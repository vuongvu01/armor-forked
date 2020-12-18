import { css } from 'styled-components';
import { colorGrey30, colorGrey60 } from '../../../../../tokens';

export const getHeaderNavigationMenuContentHeaderOverride = () => css`
    background-color: ${colorGrey60};

    .HeaderNavigationMenuContentHeader-Title {
        color: ${colorGrey30};
    }
`;
