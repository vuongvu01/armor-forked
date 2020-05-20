import { fontSizeHTML, fontWeightMedium } from '../../tokens';

export const typographyDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            fontFamily: '$typography.fontFamily',
            color: '$color.text.main',
        },
        h6: {
            fontSize: fontSizeHTML,
            fontWeight: fontWeightMedium,
            lineHeight: '1.3',
        },
    },
};
