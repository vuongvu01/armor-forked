import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

export const getSkeleton = () => {
    return css`
        color: ${color('neutral.07')};

        &:after {
            background: linear-gradient(
                90deg,
                transparent,
                ${color('neutral.08')},
                transparent
            );
        }
    `;
};
