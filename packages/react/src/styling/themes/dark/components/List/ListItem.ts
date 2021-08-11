import { css } from 'styled-components';
import { color } from '../../../../../system';

export const getListItemOverride = () => {
    return css`
        &:hover {
            background: ${color('neutral.02')};
        }
    `;
};
