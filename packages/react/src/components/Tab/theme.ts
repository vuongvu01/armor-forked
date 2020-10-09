/* eslint-disable @typescript-eslint/camelcase */
import { componentSpacing01, componentSpacing04 } from '../../tokens';

export const tabDefaultTheme = {
    Container: {
        active: {
            transform: 'scaleX(1)',
        },
        active__after: {
            backgroundColor: '$color.primary.main',
            transform: 'scaleX(1)',
        },
    },
    Label: {
        active: {
            color: '$color.neutral.06',
        },
        base: {
            borderRadius: '$shape.borderRadius.sharp',
            fontSize: '$typography.labelLarge.fontSize',
            paddingTop: componentSpacing01,
            paddingRight: componentSpacing04,
            paddingBottom: componentSpacing01,
            paddingLeft: componentSpacing04,
            color: '$color.neutral.05',
        },
        hover: {
            '&:hover': {
                backgroundColor: '$color.primary.lightest',
                borderBottom: '$color.primary.lightest',
            },
        },
        disabled: {
            borderRadius: '$shape.borderRadius.pill',
            color: '$color.neutral.04',
            '&:hover': {
                backgroundColor: 'inherit',
            },
        },
    },
};
