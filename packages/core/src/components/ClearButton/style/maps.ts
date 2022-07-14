import { color } from '@deliveryhero/armor-system';
import { css } from 'styled-components';
import {
    ClearButtonTypeStateStyleMap,
    ClearButtonTypeFocusStyleMap,
} from '../type';

export const focusStyleMap: ClearButtonTypeFocusStyleMap = {
    'circle-filled': {
        noOutline: true,
    },
    thin: undefined,
};

export const stateStyleMap: ClearButtonTypeStateStyleMap = {
    'circle-filled': {
        enabled: css`
            color: ${color('neutral.07')};
            background: ${color('neutral.00')};
        `,
        hover: css`
            color: ${color('neutral.05')};
            background: ${color('neutral.00')};
        `,
        pressed: css`
            color: ${color('neutral.11')};
            background: ${color('neutral.00')};
        `,
        disabled: css`
            color: ${color('neutral.05')};
            background: ${color('neutral.02')};
        `,
    },
    thin: {
        enabled: css`
            color: ${color('neutral.11')};
        `,
        hover: css`
            color: ${color('neutral.11')};
            background: ${color('neutral.02')};
        `,
        pressed: css`
            color: ${color('neutral.11')};
            background: ${color('neutral.03')};
        `,
        disabled: css`
            color: ${color('neutral.05')};
        `,
    },
};
