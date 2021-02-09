import { css } from 'styled-components';
import { colorGrey40 } from '../../../../tokens';

export const getDropdownBeforeSectionClearButtonOverride = () => {
    return css`
        color: ${colorGrey40};
    `;
};
