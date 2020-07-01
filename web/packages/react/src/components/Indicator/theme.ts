import { fontSizeSmall, fontWeightNormal } from 'src/tokens';

export const indicatorDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            fontFamily: '$typography.fontFamily',
            fontWeight: fontWeightNormal,
            fontSize: fontSizeSmall,
            backgroundColor: '#D43B42',
            color: 'white',
            width: 4,
            height: 4,
        },
    },
};
