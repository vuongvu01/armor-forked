import { fontWeightNormal } from '../../tokens';

export const formFieldDefaultTheme = {
    Root: {
        base: {
            fontFamily: '$typography.fontFamily',
            fontWeight: fontWeightNormal,
        },
        autoMargin: {
            '&:not(:last-child)': {
                marginBottom: 5,
            },
        },
    },
};
