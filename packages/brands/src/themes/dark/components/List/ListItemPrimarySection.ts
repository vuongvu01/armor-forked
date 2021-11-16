import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';

type ListItemPrimarySectionPropsType = Partial<{
    disabled: boolean;
    inactive: boolean;
}>;

export const getListItemPrimarySectionOverride = ({
    disabled,
    inactive,
}: ListItemPrimarySectionPropsType) => {
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
