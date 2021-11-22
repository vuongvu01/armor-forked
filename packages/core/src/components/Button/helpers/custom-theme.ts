import { makeTheme } from '@deliveryhero/armor-system';

export const armorTheme = makeTheme({
    armor: {
        color: {
            primary: {
                lighter: '#4F5C6E',
                light: '#4F5C6E',
                main: '#343B46',
                dark: '#1F222A',
                darker: '#1F222A',
            },
            danger: {
                light: '#F6D5D5',
                main: '#d32f2f',
                dark: '#c62d2d',
            },
        },
        components: {
            Button: {
                Root: {
                    base: {
                        borderWidth: '2px',
                        textTransform: 'uppercase',
                        borderRadius: '$shape.borderRadius.sharp',
                        fontFamily: 'Comic Sans MS',
                    },
                    secondary: {
                        backgroundColor: '$color.neutral.00',
                        '&:hover': {
                            backgroundColor: '$color.neutral.03',
                        },
                        '&:focus': {
                            backgroundColor: '$color.neutral.03',
                        },
                        '&:active': {
                            backgroundColor: '$color.neutral.05',
                        },
                        '&:disabled': {
                            color: '$color.neutral.05',
                            borderColor: '$color.neutral.03',
                            backgroundColor: '$color.neutral.00',
                        },
                    },
                    tertiary: {
                        '&:hover': {
                            backgroundColor: '$color.neutral.03',
                        },
                        '&:focus': {
                            backgroundColor: '$color.neutral.03',
                        },
                        '&:active': {
                            backgroundColor: '$color.neutral.05',
                        },
                    },
                },
            },
        },
    },
});
