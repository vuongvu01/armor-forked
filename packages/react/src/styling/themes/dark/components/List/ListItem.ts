import { css } from 'styled-components';
import { color } from '../../../../../system/mixins';

export const getListItemOverride = () => {
    const result = css`
        &:hover {
            background: ${color('neutral.02')};
        }
    `;
    return result;
};
