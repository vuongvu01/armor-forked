const sizes = {
    dimensions: {
        width: 32,
        height: 18,
        padding: 2,
    },
    toggle: {
        side: 14,
    },
};

const focusedState = {
    backgroundColor: '$color.neutral.05',
};

const focusedStateChecked = {
    backgroundColor: '$color.primary.light',
};

export const toggleDefaultTheme = {
    Root: {
        base: {
            backgroundColor: '$color.neutral.04',
            '&:hover': focusedState,
            '&:focus': focusedState,
        },
        disabled: {
            backgroundColor: '$color.neutral.03',
            pointerEvents: 'none',
        },
        checked: {
            base: {
                backgroundColor: '$color.primary.main',
                '&:hover': focusedStateChecked,
                '&:focus': focusedStateChecked,
            },
            disabled: {
                backgroundColor: '$color.primary.lighter',
                pointerEvents: 'none',
            },
        },
    },
    Toggle: {
        base: { backgroundColor: '$color.neutral.00' },
        disabled: { backgroundColor: '$color.neutral.01' },
    },
    Label: {
        base: {
            width: `${sizes.dimensions.width}px`,
            height: `${sizes.dimensions.height}px`,
        },
    },
    Slider: {
        base: {
            height: `${sizes.toggle.side}px`,
            width: `${sizes.toggle.side}px`,
            left: `${sizes.dimensions.padding}px`,
            bottom: `${sizes.dimensions.padding}px`,
        },
        translated: {
            transform: `translateX(${sizes.toggle.side}px)`,
        },
    },
};
