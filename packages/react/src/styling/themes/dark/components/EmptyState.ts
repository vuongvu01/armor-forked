import { css } from 'styled-components';
import { color } from '../../../../system';

export const getEmptyStateOverride = () => {
    const result = css`
        .EmptyState-Title,
        .EmptyState-Description {
            color: ${color('neutral.06')};
        }
    `;

    return result;
};
