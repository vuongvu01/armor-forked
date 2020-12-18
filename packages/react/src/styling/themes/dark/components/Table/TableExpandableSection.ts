import { css } from 'styled-components';
import { colorGrey70 } from '../../../../../tokens';

export const getTableExpandableSectionOverride = () => {
    return css`
        background-color: ${colorGrey70};
        &:hover td {
            background-color: ${colorGrey70};
        }
    `;
};
