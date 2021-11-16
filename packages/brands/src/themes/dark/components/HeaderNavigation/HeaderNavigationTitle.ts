import { css } from 'styled-components';
import { colorGrey01 } from '@deliveryhero/armor-system';

export const getHeaderNavigationTitleOverride = () => css`
    color: ${colorGrey01};

    &:hover {
        background: inherit;
    }
`;
