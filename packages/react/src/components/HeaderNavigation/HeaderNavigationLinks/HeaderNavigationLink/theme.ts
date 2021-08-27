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

            color: '$color.neutral.11',
            '&:visited': {
                color: '$color.neutral.11',
            },
            '&:active': {
                color: '$color.neutral.11',
            },
            '&:focus': {
                color: '$color.neutral.11',
            },
            '&:hover': {
                color: '$color.neutral.11',
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
