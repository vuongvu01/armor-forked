const color = {
    main: '$color.primary.main',
    contrast: '$color.primary.contrast',
    neutral01: '$color.neutral.01',
    neutral03: '$color.neutral.03',
    neutral04: '$color.neutral.04',
    neutral05: '$color.neutral.05',
};

const hoverBase = {
    borderWidth: '1px',
    borderStyle: 'solid',
};

const checkedDefault = {
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
    backgroundPositionX: 'left',
    backgroundPositionY: 'top',
    borderWidth: '1px',
    borderStyle: 'solid',
};

const contrastCheckmark = {
    '&:after': {
        borderColor: color.contrast,
    },
};

export const buttonDefaultTheme = {
    Root: {
        base: {
            backgroundColor: color.contrast,
            border: color.neutral04,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'left',
            backgroundPositionY: 'top',
            borderWidth: '1px',
            borderStyle: 'solid',
        },
        primary: {
            '&:hover': {
                border: color.main,
                ...hoverBase,
            },
            ...contrastCheckmark,
        },
        disabled: {
            border: color.neutral03,
            backgroundColor: color.neutral01,
            '&:after': {
                borderColor: color.neutral01,
            },
        },
        checked: {
            base: {
                ...checkedDefault,
                border: color.main,
                backgroundColor: color.main,
                ...contrastCheckmark,
            },
            disabled: {
                boxSizing: 'content-box',
                border: color.neutral03,
                backgroundColor: color.neutral01,
                '&:after': {
                    borderColor: color.neutral05,
                },
            },
        },
    },
};
