import { css } from 'styled-components';

import { colorGrey50, colorGrey60 } from '../../../../../tokens';

export const getHeaderNavigationActionItemOverride = () => css`
    color: ${colorGrey50};
    &:hover {
        background-color: ${colorGrey60};
    }
`;
