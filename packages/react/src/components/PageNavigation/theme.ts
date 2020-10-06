/* eslint-disable @typescript-eslint/camelcase */

import {
    borderRadius02,
    componentSpacing01,
    componentSpacing03,
} from '../../tokens';

export const pageNavigationDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            $typography: 'paragraphMedium',
        },
    },
    PageButton: {
        base: {
            $typography: '$inherit',
            paddingTop: componentSpacing01,
            paddingBottom: componentSpacing01,
            paddingLeft: componentSpacing03,
            paddingRight: componentSpacing03,
            borderRadius: borderRadius02,
            minHeight: 8,

            '&:hover': {
                backgroundColor: '$color.primary.lightest',
            },
            '&:not(:last-child)': {
                marginRight: componentSpacing01,
            },
            '&:before': {
                backgroundColor: '$color.primary.main',
            },
        },
        arrow: {
            paddingLeft: componentSpacing01,
            paddingRight: componentSpacing01,
            color: '$color.neutral.05',
        },
        disabled: {
            color: '$color.neutral.04',
        },
    },
};
