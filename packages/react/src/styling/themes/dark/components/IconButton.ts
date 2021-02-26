import { css } from 'styled-components';
import { colorGrey60 } from '../../../../tokens';

export const getIconButtonOverride = () => {
    return css`
        &:hover {
            background-color: ${colorGrey60};
        }
    `;
};
