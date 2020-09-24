/* eslint-disable @typescript-eslint/camelcase */

export const tableActionDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            fontFamily: '$typography.body.fontFamily',
            color: '$color.neutral.05',
            '&:hover': {
                color: '$color.primary.main',
            },
        },
    },
};
