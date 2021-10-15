import { css } from 'styled-components';
import { color } from '../../../../../system/mixins/color';

export const getDialogOverride = () => css`
    .Dialog-Window {
        background-color: ${color('neutral.10')};
    }
`;
