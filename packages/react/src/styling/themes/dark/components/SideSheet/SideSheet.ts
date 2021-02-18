import { css } from 'styled-components';
import { colorGrey40, colorGrey70 } from '../../../../../tokens';

export const getSideSheetOverride = () => css`
    .SideSheet-Window {
        background-color: ${colorGrey70};
    }

    .SideSheet-CloseIcon {
        color: ${colorGrey40};
    }
`;
