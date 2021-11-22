import { css } from 'styled-components';
import { colorRed30 } from '@deliveryhero/armor-system';

export const getIndicatorOverride = () => {
    return css`
        background-color: ${colorRed30};
    `;
};
