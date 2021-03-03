import { css } from 'styled-components';
import { colorGrey70 } from '../../../../../tokens';

export const getTableHeadCellOverride = () => {
    return css`
        &:hover {
            background-color: ${colorGrey70};
        }
    `;
};
