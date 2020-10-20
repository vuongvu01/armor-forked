export const legacyThemeVendorMonitor = {
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    palette: {
        divider: '#d7dbe7',
        action: {
            selected: '#EDF0F7',
        },
        primary: {
            main: '#1e91d6',
            light: '#1e91d6',
        },
        secondary: {
            main: '#2d3645',
        },
    },
    overrides: {
        MuiMenuItem: {
            root: {
                borderRadius: '2px',
            },
        },
        MuiSelect: {
            icon: {
                right: '4px',
            },
            select: {
                border: '1px solid #d7dbe7',
                backgroundColor: '#ffffff',
                paddingLeft: '8px',
                borderRadius: '2px',

                '&:focus': {
                    backgroundColor: '#ffffff',
                },
            },
        },
        MuiChip: {
            root: {
                backgroundColor: '#ffffff',
                marginRight: '8px',
            },
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 4,
    },
    armor: {
        typography: {
            fontFamily: 'Roboto, sans-serif',
        },
        spacing: 4,
        shape: {
            borderRadius: '4px',
        },
    },
};
