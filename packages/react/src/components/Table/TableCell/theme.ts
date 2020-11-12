/* eslint-disable @typescript-eslint/camelcase */

import {
    componentSpacing04,
    componentSpacing05,
    fontWeightMedium,
} from '../../../tokens';

export const tableCellDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            $typography: 'paragraphLarge',
            backgroundColor: '$color.neutral.01',
            paddingLeft: componentSpacing04,
            paddingRight: componentSpacing04,
            paddingTop: componentSpacing05,
            paddingBottom: componentSpacing05,
        },
        header: {
            fontSize: '$typography.paragraphMedium.fontSize',
            lineHeight: '$typography.paragraphMedium.lineHeight',
            fontWeight: fontWeightMedium,
            letterSpacing: '$typography.paragraphMedium.letterSpacing',

            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
        },
        stickyTop__visible: {
            backgroundColor: '$color.neutral.00',
            '&::after': {
                borderColor: '$color.neutral.03',
                boxShadow: 'inset 0 10px 5px -5px rgba(0, 0, 0, 0.08)',
            },
        },
        stickyLeft__visible: {
            backgroundColor: '$color.neutral.00',
            '&::after': {
                borderColor: '$color.neutral.03',
                boxShadow: 'inset 10px 0 8px -8px rgba(0,0,0,.15)',
            },
        },
        stickyRight__visible: {
            backgroundColor: '$color.neutral.00',
            '&::after': {
                borderColor: '$color.neutral.03',
                boxShadow: 'inset -10px 0 8px -8px rgba(0,0,0,.15)',
            },
        },
        disabled: {
            backgroundColor: '$color.neutral.02',
            color: '$color.neutral.03',
            '&:hover': {
                backgroundColor: '$color.neutral.02',
            },
        },
    },
};
