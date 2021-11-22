import { css } from 'styled-components';
import { color, token } from '@deliveryhero/armor-system';
import { MenuElementPropsType } from '@deliveryhero/armor';

export const getMenuElementOverride = ({ selected }: MenuElementPropsType) => {
    let result = {};

    result = css`
        color: ${color('neutral.06')};
        &:hover {
            background-color: ${color('neutral.09')};
        }
    `;

    if (selected) {
        result = css`
            ${result};
            background-color: ${color('neutral.09')};
        `;
    } else {
        result = css`
            ${result};
            background-color: ${token('body.backgroundColor')};
        `;
    }

    return result;
};
