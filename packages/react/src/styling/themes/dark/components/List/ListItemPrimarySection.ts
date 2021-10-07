import { css } from 'styled-components';
import { color } from '../../../../../system';

export const getListItemPrimarySectionOverride = ({
    disabled,
    inactive,
}: {
    disabled?: boolean;
    inactive?: boolean;
}) => {
    let result = {};

    if (disabled || inactive) {
        result = css`
            ${result};
            color: ${inactive ? color('neutral.06') : color('neutral.05')};
        `;
    } else {
        result = css`
            color: ${color('neutral.06')};
        `;
    }
    return result;
};
