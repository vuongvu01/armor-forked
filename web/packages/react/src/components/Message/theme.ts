import { fontSizeRegular, fontWeightLight } from 'src/tokens';

export const messageDefaultTheme = {
    // place the default theme object here, it will be automatically processed
    Root: {
        base: {
            borderRadius: '$figure.borderRadius',
            paddingLeft: 4,
            paddingRight: 4,
        },
        paddedRight: {
            paddingRight: 10,
        },
        info: {
            borderColor: '#3e84f3',
            backgroundColor: '#f5f9fe',
            '.MessageAction-Root--use-message-color': {
                color: '#3e84f3',
            },
        },
        warning: {
            borderColor: '#ffab01',
            backgroundColor: '#fffbf2',
            '.MessageAction-Root--use-message-color': {
                color: '#ffab01',
            },
        },
        error: {
            borderColor: '#ff5630',
            backgroundColor: '#fff6f4',
            '.MessageAction-Root--use-message-color': {
                color: '#ff5630',
            },
        },
        success: {
            borderColor: '#35b37e',
            backgroundColor: '#f5fbf8',
            '.MessageAction-Root--use-message-color': {
                color: '#35b37e',
            },
        },
    },
    Icon: {
        base: {
            fontSize: 24,
            marginRight: 4,
            paddingTop: 4,
            paddingBottom: 4,
        },
        info: {
            color: '#3e84f3',
        },
        warning: {
            color: '#ffab01',
        },
        error: {
            color: '#ff5630',
        },
        success: {
            color: '#35b37e',
        },
    },
    Central: {
        base: {},
    },
    Content: {
        base: {
            color: '$color.text.main',
            fontWeight: fontWeightLight,
            fontSize: fontSizeRegular,
            fontFamily: '$typography.fontFamily',

            paddingTop: 4,
            paddingBottom: 4,
        },
    },
    Actions: {
        base: {
            marginLeft: 4,

            paddingTop: 1,
            paddingBottom: 1,
        },
    },
    Extra: {
        base: {
            marginLeft: 4,
            paddingTop: 2,
            paddingBottom: 2,
        },
    },
    CloseButton: {
        base: {
            top: 2,
            right: 2,
            height: 6,
            width: 6,
            color: '#707070',
            fontSize: fontSizeRegular,
        },
    },
};
