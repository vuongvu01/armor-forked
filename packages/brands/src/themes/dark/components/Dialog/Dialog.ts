import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getDialogOverride = () => css`
    .Dialog-Window {
        background-color: ${color('neutral.10')};
    }
`;
