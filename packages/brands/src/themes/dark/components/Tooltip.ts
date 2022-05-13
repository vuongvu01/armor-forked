import { css } from 'styled-components';
import { TooltipPropsType } from '@deliveryhero/armor';
import { color, colorGrey20 } from '@deliveryhero/armor-system';

export const getTooltipOverride = ({ error }: TooltipPropsType) => {
    if (error) {
        return css`
            color: ${color('neutral.01')};
            background-color: ${color('error.04')};

            .Tooltip-Arrow::before {
                background-color: ${color('error.04')};
            }
        `;
    }

    return css`
        color: ${color('neutral.11')};
        background-color: ${colorGrey20};

        .Tooltip-Arrow::before {
            background-color: ${colorGrey20};
        }
    `;
};
