import { css } from 'styled-components';
import { colorGrey70 } from '@deliveryhero/armor-system';

export const getTableHeadCellOverride = () => {
    return css`
        &:hover {
            background-color: ${colorGrey70};
        }
    `;
};
