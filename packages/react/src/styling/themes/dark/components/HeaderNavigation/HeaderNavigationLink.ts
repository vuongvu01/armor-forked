import { css } from 'styled-components';

import { colorGrey01, colorGrey60 } from '../../../../../tokens';

export const getHeaderNavigationLinkOverride = () => css`
    color: ${colorGrey01};

    &:visited {
        color: ${colorGrey01};
    }

    &:active {
        color: ${colorGrey01};
    }

    &:focus {
        color: ${colorGrey01};
    }

    &:hover {
        color: ${colorGrey01};
        background-color: ${colorGrey60};
    }
`;
