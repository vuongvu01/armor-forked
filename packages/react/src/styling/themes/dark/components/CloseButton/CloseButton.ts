import { css } from 'styled-components';
import { colorGrey40 } from '../../../../../tokens';
import { color } from '../../../../../system/mixins';

export const getCloseButtonOverride = () => {
    const result = css`
        color: ${colorGrey40};
        &:hover {
            background-color: ${color('neutral.03')};
        }
    `;
    return result;
};
