import { css } from 'styled-components';
import { color, token } from '@deliveryhero/armor-system';
import { MenuPropsType } from '@deliveryhero/armor';

export const getMenuOverride = ({ enableBottomSeparator }: MenuPropsType) => {
    let result = {};

    result = css`
        background-color: ${token('body.backgroundColor')};
    `;

    if (enableBottomSeparator) {
        result = css`
            ${result};
            border-color: ${color('neutral.08')};
        `;
    }

    return result;
};
