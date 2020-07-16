/* eslint-disable @typescript-eslint/camelcase */

import { componentSpacing04 } from '../../tokens';

const selectorLabelDefaultTheme = {
    Label: {
        base: {
            paddingLeft: componentSpacing04,
            fontSize: '$typography.labelSmall.fontSize',
        },
        disabled: {
            color: '$color.neutral.04',
        },
        error: {
            color: '$color.error.main',
        },
        disabled__error: {
            color: '$color.error.lighter',
        },
    },
};

export default selectorLabelDefaultTheme;
