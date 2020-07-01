import { fontSizeSmall, fontWeightMedium } from 'src/tokens';

export const formFieldMessageDefaultTheme = {
    Root: {
        base: {
            fontFamily: '$typography.fontFamily',
            fontWeight: fontWeightMedium,
            fontSize: fontSizeSmall,
            color: '#717171',
            margin: 2,
        },
        error: {
            color: '#d73d45',
        },
    },
};
