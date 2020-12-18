import { css } from 'styled-components';
import { colorGrey10 } from '../../../../../tokens';
import { MenuPropsType } from '../../../../../components/Menu/type';
import { token } from '../../../../../system/mixins';

export const getMenuOverride = ({ enableBottomSeparator }: MenuPropsType) => {
    let result = {};

    result = css`
        background-color: ${token('body.backgroundColor')};
    `;

    if (enableBottomSeparator) {
        result = css`
            ${result};
            border-color: ${colorGrey10};
        `;
    }

    return result;
};
