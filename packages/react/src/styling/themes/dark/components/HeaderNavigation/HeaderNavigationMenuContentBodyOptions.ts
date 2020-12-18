import { css } from 'styled-components';

import { colorGrey01, colorGrey30, colorGrey60 } from '../../../../../tokens';

export const getHeaderNavigationMenuContentBodyOptionsOverride = () => css`
    .HeaderNavigationMenuContentBodyOptions-Category {
        color: ${colorGrey30};
    }

    .HeaderNavigationMenuContentBodyOptions-Item {
        color: ${colorGrey01};

        &:hover {
            background-color: ${colorGrey60};
        }
    }

    .HeaderNavigationMenuContentBodyOptions-Item.active {
        background-color: ${colorGrey60};
    }
`;
