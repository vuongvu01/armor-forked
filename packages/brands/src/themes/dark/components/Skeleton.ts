import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getSkeleton = () => {
    return css`
        &:after {
            background: linear-gradient(
                90deg,
                transparent,
                ${color('neutral.07')},
                transparent
            );
        }
    `;
};
