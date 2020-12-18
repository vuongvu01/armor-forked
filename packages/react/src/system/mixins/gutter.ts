import { css } from 'styled-components';
import { spacing } from './spacing';

type GutterPropsType = {
    spacing: number;
};

export const gutter = ({ spacing: amount }: GutterPropsType) => {
    const value = spacing(amount);
    const valueNegative = spacing(amount * -1);

    return css`
        margin-right: ${valueNegative};
        margin-bottom: ${valueNegative};

        & > * {
            margin-right: ${value};
            margin-bottom: ${value};
        }
    `;
};
