const color = {
    main: '$color.primary.main',
    light: '$color.primary.light',
    white: '$color.neutral.00',
    neutral01: '$color.neutral.01',
    neutral03: '$color.neutral.03',
    neutral04: '$color.neutral.04',
    neutral05: '$color.neutral.05',
};

const borderBase = {
    borderWidth: '1px',
    borderStyle: 'solid',
};

const contrastCheckmark = {
    '&:after': {
        borderColor: color.white,
    },
};

const disabledBase = {
    border: color.neutral03,
    backgroundColor: color.neutral01,
    ...borderBase,
};

const focusedState = {
    border: color.main,
    ...borderBase,
};

const focusedStateChecked = { backgroundColor: color.light };

export const buttonDefaultTheme = {
    Root: {
        base: {
            backgroundColor: color.white,
            border: color.neutral04,
        },
        primary: {
            '&:hover': focusedState,
            '&:focus': focusedState,
            ...contrastCheckmark,
        },
        disabled: {
            ...disabledBase,
            '&:after': {
                borderColor: color.neutral01,
            },
        },
        checked: {
            base: {
                border: color.main,
                backgroundColor: color.main,
                ...contrastCheckmark,
                '&:hover': focusedStateChecked,
                '&:focus': focusedStateChecked,
            },
            disabled: {
                ...disabledBase,
                '&:after': {
                    borderColor: color.neutral05,
                },
            },
        },
    },
};
