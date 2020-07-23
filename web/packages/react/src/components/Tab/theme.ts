import { componentSpacing01, componentSpacing04 } from '../../tokens';

export const tabDefaultTheme = {
    Container: {
        active: {
            borderBottom: '$color.primary.main',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            color: '$color.neutral.06',
            cursor: 'default',
        },
    },
    Label: {
        base: {
            borderRadius: '$figure.borderRadius.sharp',
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
                borderBottomWidth: '2px',
                borderBottomStyle: 'solid',
                borderRadius: '0',
            },
        },
        disabled: {
            borderRadius: '$figure.borderRadius.pill',
            color: '$color.neutral.04',
            '&:hover': {
                backgroundColor: 'inherit',
            },
        },
    },
};
