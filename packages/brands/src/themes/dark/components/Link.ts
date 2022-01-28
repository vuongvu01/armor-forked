import { css } from 'styled-components';
import { color, colorBlue10, colorBlue30 } from '@deliveryhero/armor-system';
import { LinkPropsType } from '@deliveryhero/armor';

export const getLinkOverride = ({ pressed, disabled }: LinkPropsType) => {
    let result = css`
        color: ${color('primary.lighter')};
        &:focus-visible {
            background-color: ${color('primary.03', 0.2)};
            outline-color: ${color('primary.03', 0.2)};
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
