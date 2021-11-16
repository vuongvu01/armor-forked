import { css } from 'styled-components';
import { color, enforceColor } from '@deliveryhero/armor-system';
import { TabPropsType } from '@deliveryhero/armor';

export const getTabOverride = ({ disabled }: TabPropsType) => {
    let result = css`
        .Tab-Label {
            color: ${color('neutral.06')};
            &:hover {
                color: ${color('primary.light')};
            }
        }

        &:after {
            background-color: ${color('primary.lighter')};
        }
    `;

    if (disabled) {
        result = css`
            ${result};
            .Tab-Label {
                ${enforceColor(color('neutral.04'))};
            }
        `;
    }

    return result;
};
