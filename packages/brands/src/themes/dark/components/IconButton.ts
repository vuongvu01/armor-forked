import { css } from 'styled-components';
import { colorGrey60 } from '@deliveryhero/armor-system';

export const getIconButtonOverride = () => {
    return css`
        &:hover {
            background-color: ${colorGrey60};
        }
    `;
};
