import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getSideSheetOverride = () => css`
    .SideSheet-Window {
        background-color: ${color('neutral.10')};
    }
`;
