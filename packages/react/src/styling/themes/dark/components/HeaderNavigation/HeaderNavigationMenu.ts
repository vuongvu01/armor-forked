import { css } from 'styled-components';

import { colorGrey40, colorGrey90 } from '../../../../../tokens';

export const getHeaderNavigationMenuOverride = () => css`
    .ExpansionIndicator-Content {
        background-color: ${colorGrey90};
        width: 40px;
    }
    .ExpansionIndicator-Icon {
        border-color: ${colorGrey40};
    }
`;
