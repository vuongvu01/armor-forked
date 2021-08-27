import { css } from 'styled-components';
import { color } from '../../../../system';
import { LinkPropsType } from '../../../../components';
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
            color: ${color('visited.02')};
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
            color: ${color('neutral.07')};
        `;
    }

    return result;
};
