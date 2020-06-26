import { fontSizeSmall, fontWeightNormal, white } from '../../tokens';

export const tooltipDefaultTheme = {
    Root: {
        base: {
            fontSize: fontSizeSmall,
            fontWeight: fontWeightNormal,
            fontFamily: '$typography.fontFamily',
            borderRadius: '$figure.borderRadius',
            lineHeight: 1.6,
            padding: 3,
        },
        normal: {
            color: '#717171',
            backgroundColor: white,
        },
        dark: {
            color: white,
            backgroundColor: '#333333',
        },
        error: {
            color: white,
            backgroundColor: '#D73D44',
        },
        small: {
            padding: 2,
        },
    },
    Arrow: {
        base: {},
        normal: {
            '&:before': {
                backgroundColor: white,
            },
        },
        dark: {
            '&:before': {
                backgroundColor: '#333333',
            },
        },
        error: {
            '&:before': {
                backgroundColor: '#D73D44',
            },
        },
    },
};
