import { css } from 'styled-components';
import { color } from '../../../../system/mixins';
import { LinkPropsType } from '../../../../components/Link/type';
import { colorBlue10, colorBlue30 } from '../../../../tokens';

export const getLinkOverride = ({ pressed, disabled }: LinkPropsType) => {
    let result = css`
        color: ${color('primary.lighter')};
        &:focus {
            color: ${color('primary.lighter')};
        }
        &:hover:active {
            color: ${colorBlue10};
        }
        &:visited {
            color: ${color('purple.02')};
        }
    `;

    if (pressed) {
        result = css`
            ${result};
            color: ${colorBlue30};
        `;
    }

    if (disabled) {
        result = css`
            ${result};
            color: ${color('neutral.05')};
        `;
    }

    return result;
};
