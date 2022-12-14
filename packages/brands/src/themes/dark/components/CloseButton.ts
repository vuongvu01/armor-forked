import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getCloseButtonOverride = () => {
    return css`
        color: ${color('neutral.04')};
        &:hover {
            background-color: ${color('neutral.03')};
        }
    `;
};
