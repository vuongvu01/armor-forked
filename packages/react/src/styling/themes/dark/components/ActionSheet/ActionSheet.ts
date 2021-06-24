import { css } from 'styled-components';
import { colorGrey40 } from '../../../../../tokens';

export const getActionSheetOverride = () => {
    const result = css`
        background-color: ${colorGrey40};
    `;

    return result;
};
