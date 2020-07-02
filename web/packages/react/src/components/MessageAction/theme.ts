import { fontSizeRegular, fontWeightMedium } from '../../tokens';

export const messageActionDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            fontFamily: '$typography.fontFamily',
            color: '$color.text.main',
            fontWeight: fontWeightMedium,
            fontSize: fontSizeRegular,
        },
    },
};
