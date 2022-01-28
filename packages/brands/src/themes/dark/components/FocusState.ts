import { css } from 'styled-components';
import { getFocusStyleFromColor } from '@deliveryhero/armor-system';

type Props = Partial<{
    disabled: boolean;
    error: boolean;
    filled: boolean;
    mainColor: string;
}>;

export const getFocusStateOverride = ({ error, filled, mainColor }: Props) => {
    if (mainColor) {
        return '';
    }

    if (error) {
        return css`
            ${getFocusStyleFromColor('error.04')}
        `;
    }

    if (filled) {
        return css`
            ${getFocusStyleFromColor('primary.03', 'neutral.01')}
        `;
    }

    return css`
        ${getFocusStyleFromColor('primary.03')}
    `;
};
