import { css } from 'styled-components';
import { MenuPropsType } from '../../../../../components';
import { color, token } from '../../../../../system';

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
