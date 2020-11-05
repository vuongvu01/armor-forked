/* eslint-disable @typescript-eslint/camelcase */

export const menuElementDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            $typography: 'labelLarge',
            color: '$color.neutral.06',
            backgroundColor: '$color.neutral.00',
            paddingLeft: 6,
            paddingRight: 4,

            '&:before': {
                backgroundColor: '$color.primary.main',
            },

            '&:hover': {
                '&:before': {
                    width: 1,
                },
                backgroundColor: '$color.primary.lightest',
            },
        },
        secondary: {
            paddingLeft: 16,
            $typography: 'paragraphLarge',
            backgroundColor: '$color.neutral.01',
        },
        tertiary: {
            paddingLeft: 20,
            $typography: 'paragraphLarge',
            backgroundColor: '$color.neutral.01',
        },
        selected: {
            '&:before': {
                width: 1,
            },
            backgroundColor: '$color.primary.lightest',
        },
    },
    ExpanseHandle: {
        base: {
            padding: 4,
            paddingTop: 5,
            color: '$color.primary.main',
        },
    },
    ExpanseHandleArrow: {
        base: {},
    },
    Content: {
        base: {
            paddingTop: 4,
            paddingBottom: 4,
        },
    },
};
