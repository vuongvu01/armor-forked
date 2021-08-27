/* eslint-disable @typescript-eslint/camelcase */
import { componentSpacing04 } from '../../tokens';

export const tabDefaultTheme = {
    Root: {
        after: {
            right: componentSpacing04,
            left: componentSpacing04,
        },
        active__after: {
            backgroundColor: '$color.primary.main',
            transform: 'scaleX(1)',
        },
    },
    Label: {
        active: {
            color: '$color.neutral.11',
        },
        hover: {
            '&:hover': {
                backgroundColor: '$color.primary.lightest',
                borderBottom: '$color.primary.lightest',
            },
        },
        disabled: {
            color: '$color.neutral.05',
            '&:hover': {
                backgroundColor: 'inherit',
            },
        },
    },
};
