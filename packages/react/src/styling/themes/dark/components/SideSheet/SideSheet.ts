import { css } from 'styled-components';
import { color } from '../../../../../system/mixins/color';

export const getSideSheetOverride = () => css`
    .SideSheet-Window {
        background-color: ${color('neutral.10')};
    }
`;
