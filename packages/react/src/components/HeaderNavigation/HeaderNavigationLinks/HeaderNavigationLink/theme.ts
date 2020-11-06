import { componentSpacing03, componentSpacing04 } from '../../../../tokens';

export const headerNavigationLink = {
    Root: {
        base: {
            fontSize: '$typography.paragraphMedium.fontSize',
            fontWeight: '$typography.paragraphMedium.fontWeight',
            paddingTop: componentSpacing03,
            paddingRight: componentSpacing04,
            paddingBottom: componentSpacing03,
            paddingLeft: componentSpacing04,

            color: '$color.neutral.06',
            '&:visited': {
                color: '$color.neutral.06',
            },
            '&:active': {
                color: '$color.neutral.06',
            },
            '&:focus': {
                color: '$color.neutral.06',
            },
            '&:hover': {
                color: '$color.neutral.06',
                backgroundColor: '$color.primary.lightest',
            },
        },
        active: {
            '&:before': {
                backgroundColor: '$color.primary.main',
            },
        },
    },
};
