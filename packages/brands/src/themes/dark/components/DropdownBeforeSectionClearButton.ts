import { css } from 'styled-components';
import { colorGrey40 } from '@deliveryhero/armor-system';

export const getDropdownBeforeSectionClearButtonOverride = () => {
    return css`
        color: ${colorGrey40};
    `;
};
