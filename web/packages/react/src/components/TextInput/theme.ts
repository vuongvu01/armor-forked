/* eslint-disable @typescript-eslint/camelcase */

import {
    fontSizeRegular,
    fontSizeSmall,
    fontWeightMedium,
    fontWeightNormal,
    white,
} from '../../tokens';

export const TextInputDefaultTheme = {
    Root: {
        base: {
            fontFamily: '$typography.fontFamily',
            fontWeight: fontWeightNormal,
            letterSpacing: '0.2px',
            lineHeight: '1.6',
            borderColor: '#c2c2c2',
            borderRadius: '$figure.borderRadius',
            backgroundColor: white,
        },
        outlined: {
            borderColor: '#3c7fe3',
        },
        error: {
            borderColor: '#d73d45',
        },
        disabled: {
            backgroundColor: '#f7f7f7',
            borderColor: '#c2c2c2',
        },
    },
    Input: {
        base: {
            fontSize: fontSizeRegular,
            color: '#050505',
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 4,
            paddingRight: 4,
            backgroundColor: white,
            borderRadius: '$figure.borderRadius',

            '&::placeholder': {
                color: '#717171',
            },
            '&:disabled': {
                color: '#717171',
                borderColor: '#dcdcdc',
                backgroundColor: '#f7f7f7',

                '&::placeholder': {
                    color: '#a7a7a7',
                },
            },
        },
        large: {
            paddingTop: 3,
            paddingBottom: 3,
        },
    },
    Label: {
        base: {
            color: '#717171',
            fontSize: fontSizeSmall,
            fontWeight: fontWeightMedium,
            marginLeft: 3,
            marginRight: 3,
            lineHeight: '1.6',
            top: '-10px',
        },
        inside: {
            fontSize: fontSizeRegular,
            fontWeight: fontWeightNormal,
            top: 2,
        },
        inside__large: {
            top: 3,
        },
        outlined: {
            color: '#050505',
        },
        disabled: {
            color: '#a7a7a7',
        },
        error: {
            color: '#d73d45',
        },
    },
    LabelBackground: {
        base: {
            backgroundColor: white,
            paddingLeft: 1,
            paddingRight: 1,
        },
        disabled: {
            backgroundColor: '#f7f7f7',
        },
    },
};
