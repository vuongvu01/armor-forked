import { css } from 'styled-components';
import { colorRed30 } from '../../../../tokens';

export const getIndicatorOverride = () => {
    return css`
        background-color: ${colorRed30};
    `;
};
