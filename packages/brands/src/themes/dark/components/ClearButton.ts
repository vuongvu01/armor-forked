import { css } from 'styled-components';

import {
    ClearButtonTypeStateStyleMap,
    colorGrey00,
    colorGrey10,
    colorGrey30,
    colorGrey70,
    colorGrey60,
    colorGrey40,
    colorGrey90,
    colorGrey80,
    makeClearButtonIconStyle,
} from '@deliveryhero/armor';

const stateStyleMap: ClearButtonTypeStateStyleMap = {
    'circle-filled': {
        enabled: css`
            color: ${colorGrey10};
            background: ${colorGrey80};
        `,
        hover: css`
            color: ${colorGrey00};
            background: ${colorGrey80};
        `,
        pressed: css`
            color: ${colorGrey30};
            background: ${colorGrey80};
        `,
        disabled: css`
            color: ${colorGrey60};
            background: ${colorGrey70};
        `,
    },
    thin: {
        enabled: css`
            color: ${colorGrey00};
            background: ${colorGrey80};
        `,
        hover: css`
            color: ${colorGrey00};
            background: ${colorGrey60};
        `,
        pressed: css`
            color: ${colorGrey30};
            background: ${colorGrey90};
        `,
        disabled: css`
            color: ${colorGrey40};
            background: ${colorGrey80};
        `,
    },
};

export const getClearButtonOverride = () => css`
    ${makeClearButtonIconStyle(stateStyleMap)}
`;
